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

  const { data, error } = await supabase.from("modals").select("title, body, button").eq("id", params.id).single();

  if (error || !data) {
    return NextResponse.json({ error: "Modal not found or access denied" }, { status: 404 });
  }

  //   const script = `
  //     (function() {
  //       var modal = ${JSON.stringify(data)};
  //       // Code to create and display the modal
  //       var modalHtml = '<div id="custom-modal" style="position:fixed;z-index:1000;left:0;top:0;width:100%;height:100%;background-color:rgba(0,0,0,0.5);">' +
  //         '<div style="background-color:#fefefe;margin:15% auto;padding:20px;border:1px solid #888;width:80%;">' +
  //         '<h2>' + modal.title + '</h2>' +
  //         '<p>' + modal.body + '</p>' +
  //         '<button onclick="document.getElementById(\'custom-modal\').style.display=\'none\'">' + modal.button + '</button>' +
  //         '</div></div>';
  //       document.body.insertAdjacentHTML('beforeend', modalHtml);
  //       document.getElementById('custom-modal').style.display = 'block';
  //     })();
  //   `;
  const script = `
  (function() {
    var modal = {"title":"Et mollitia laborios","body":"Ad voluptatum dolore","button":"Inventore asperiores"};
    // Code to create and display the modal
    var modalHtml = '<div id="modal" style="position:fixed;z-index:1000;left:0;top:0;width:100%;height:100%;background-color:rgba(0,0,0,0.5);">' +
      '<div style="background-color:#fefefe;margin:15% auto;padding:20px;border:1px solid #888;width:80%;">' +
      '<h2>' + modal.title + '</h2>' +
      '<p>' + modal.body + '</p>' +
    '<button onclick="document.getElementById(\'modal\').style.display=\'none\'">' + modal.button + '</button>' +
      '</div></div>';
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    document.getElementById('modal').style.display = 'block';
  })();
  `;

  return new NextResponse(script, {
    headers: { "Content-Type": "application/javascript" },
  });
}
