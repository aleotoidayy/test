if ($request.url.includes("/vip_info_by_group.json")) {
  let body = JSON.parse($response.body);

  
  body.data.vip_status = 1;
  body.data.is_expire = 0;
  body.data.valid_time = 1752614400;
  body.data.invalid_time = 4070908800;
  body.data.expire_days = 26747;
  body.data.vip_type = 3;
  body.data.sub_type = 3;
  body.data.screen_name = "aleotoidayy";

  
  body.data.has_privilege = true;
  body.data.privilege_list = [
    "tech_magic",
    "slim",
    "filters",
    "makeup",
    "eye_retouch",
    "vip_sticker",
    "vip_frame",
    "vip_text",
    "element_vip",
    "material_unlock"
  ];
  body.data.rights = body.data.privilege_list.map(f => ({ id: f, status: 1 }));
  body.data.privilege = body.data.privilege_list.map(f => ({ name: f, available: true }));

  $done({ body: JSON.stringify(body) });
} else {
  $done({});
}
