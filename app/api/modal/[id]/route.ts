import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token");

  if (!token) {
    return NextResponse.json({ error: "Access token is required" }, { status: 403 });
  }

  const supabase = createClient();

  // Set the access token in the custom claims
  supabase.auth.setSession({
    access_token: token,
    refresh_token: "",
  });

  const { data, error } = await supabase
    .from("modals")
    .select(
      "title, body, button, show_confirmation, button_color, button_link, is_exit_intent, background_color, text_color, button_text_color"
    )
    .eq("id", params.id)
    .single();

  if (error || !data) {
    return NextResponse.json({ error: "Modal not found or access denied" }, { status: 404 });
  }

  // BELOW SCRIPT WILL CHANGE PRIOR TO THE FINAL RELEASE
  // DO NOT FORGET TO MINIFY BEFORE PRODUCTION
  // leaving comments inside when finished I must remove them otherwise will show in websites across when used
  const script = `
  (function() {
    var modal = ${JSON.stringify(data)};
    
    var modalHtml = '<div id="custom-modal" style="position:fixed;z-index:1000;left:0;top:0;width:100%;height:100%;background-color:rgba(0,0,0,0.5);display:none;">' +
      '<div style="background-color:' + (modal.background_color || '#fefefe') + ';margin:15% auto;padding:30px;border:1px solid #888;width:80%;max-width:500px;border-radius:8px;">' +
      '<div style="color:' + (modal.text_color || '#000000') + '">' + 
      '<h2 style="margin-bottom:15px;font-weight:bold;">' + modal.title + '</h2>' +
      '<p>' + modal.body + '</p>' +
      '</div>' +
      '<div style="text-align:right;margin-top:35px;">';
    
    if (modal.show_confirmation) {
      modalHtml += '<button onclick="document.getElementById(\\'custom-modal\\').style.display=\\'none\\'" style="margin-right:10px;padding:8px 16px;border:none;background-color:#f3f4f6;cursor:pointer;border-radius:4px;">Cancel</button>';
      
      var actionButtonHtml = '<button ';
      if (modal.button_link) {
        actionButtonHtml += 'onclick="window.open(\\'' + modal.button_link + '\\', \\'_blank\\'); document.getElementById(\\'custom-modal\\').style.display=\\'none\\';" ';
      } else {
        actionButtonHtml += 'onclick="document.getElementById(\\'custom-modal\\').style.display=\\'none\\'" ';
      }
      actionButtonHtml += 'style="padding:8px 16px;border:none;background-color:' + (modal.button_color || '#3b82f6') + ';color:' + (modal.button_text_color || '#ffffff') + ';cursor:pointer;border-radius:4px;">' + modal.button + '</button>';
      
      modalHtml += actionButtonHtml;
    } else {
      modalHtml += '<button onclick="document.getElementById(\\'custom-modal\\').style.display=\\'none\\'" style="padding:8px 16px;border:none;background-color:#f3f4f6;cursor:pointer;border-radius:4px;">Close</button>';
    }
    
    modalHtml += '</div></div></div>';
    
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    
    window.showCustomModal = function() {
      document.getElementById('custom-modal').style.display = 'block';
    };

    if (modal.is_exit_intent) {
      var showExitIntent = false;
      
      document.addEventListener('mouseleave', function(e) {
        if (e.clientY < 0 && !showExitIntent) {
          showExitIntent = true;
          showCustomModal();
        }
      });

      window.addEventListener('beforeunload', function (e) {
        if (!showExitIntent) {
          showExitIntent = true;
          showCustomModal();
          e.preventDefault();
          e.returnValue = '';
        }
      });
    } else {
      // Automatically show the modal after a delay and if not exit intent
    // I will make this later on as option in the dashboard
      setTimeout(showCustomModal, 2000);
    }
  })();
`;

  return new NextResponse(script, {
    headers: { "Content-Type": "application/javascript" },
  });
}
