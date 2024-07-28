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
    .select("title, body, button, show_confirmation, button_color, button_link")
    .eq("id", params.id)
    .single();

  if (error || !data) {
    return NextResponse.json({ error: "Modal not found or access denied" }, { status: 404 });
  }

  // BELOW SCRIPT WILL CHANGE PRIOR TO THE FINAL RELEASE
  // leaving comments inside when finished I must remove them otherwise will show in websites across when used
  const script = `
  (function() {
    var modal = ${JSON.stringify(data)};
    
    var modalHtml = '<div id="custom-modal" style="position:fixed;z-index:1000;left:0;top:0;width:100%;height:100%;background-color:rgba(0,0,0,0.5);display:none;">' +
      '<div style="background-color:#fefefe;margin:15% auto;padding:20px;border:1px solid #888;width:80%;max-width:500px;border-radius:8px;">' +
      '<h2 style="margin-top:0;">' + modal.title + '</h2>' +
      '<p>' + modal.body + '</p>' +
      '<div style="text-align:right;">';
    
    if (modal.show_confirmation) {
      modalHtml += '<button onclick="document.getElementById(\\'custom-modal\\').style.display=\\'none\\'" style="margin-right:10px;padding:8px 16px;border:none;background-color:#f3f4f6;cursor:pointer;border-radius:4px;">Cancel</button>';
      
      var actionButtonHtml = '<button ';
      if (modal.button_link) {
        actionButtonHtml += 'onclick="window.open(\\'' + modal.button_link + '\\', \\'_blank\\'); document.getElementById(\\'custom-modal\\').style.display=\\'none\\';" ';
      } else {
        actionButtonHtml += 'onclick="document.getElementById(\\'custom-modal\\').style.display=\\'none\\'" ';
      }
      actionButtonHtml += 'style="padding:8px 16px;border:none;background-color:' + (modal.button_color || '#3b82f6') + ';color:white;cursor:pointer;border-radius:4px;">' + modal.button + '</button>';
      
      modalHtml += actionButtonHtml;
    } else {
      modalHtml += '<button onclick="document.getElementById(\\'custom-modal\\').style.display=\\'none\\'" style="padding:8px 16px;border:none;background-color:#f3f4f6;cursor:pointer;border-radius:4px;">Close</button>';
    }
    
    modalHtml += '</div></div></div>';
    
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    
    // I will leave this here because later I will provide
    // an option in dashboardto to show the modal based on custom button ID by clicking
    window.showCustomModal = function() {
      document.getElementById('custom-modal').style.display = 'block';
    };
    
    // Automatically show the modal after a delay
    // I will make this later on as option in the dashboard
    setTimeout(showCustomModal, 2000);
  })();
`;

  return new NextResponse(script, {
    headers: { "Content-Type": "application/javascript" },
  });
}
