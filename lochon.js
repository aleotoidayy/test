if (!$response?.body) {
  $done({});
}

const url = $request.url;
let body = JSON.parse($response.body);

if (url.includes("/vip_info_by_group")) {
  body.data = body.data || {};

  body.data.vip_status = 1;
  body.data.is_expire = 0;
  body.data.valid_time = 1752614400; 
  body.data.invalid_time = 4070908800; 
  body.data.expire_days = 26747;
  body.data.vip_type = 3; 
  body.data.sub_type = 3; 
  body.data.screen_name = "aleotoidayy";

  body.data.has_privilege = true;
  const features = [
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
  body.data.privilege_list = features;
  body.data.rights = features.map(id => ({ id, status: 1 }));
  body.data.privilege = features.map(id => ({ name: id, available: true }));

  $done({ body: JSON.stringify(body) });
}

else if (url.includes("/feature_rights")) {
  body.data = body.data || {};
  body.data.has_all = true;
  body.data.feature_list = [
    { id: "slim", enabled: true },
    { id: "tech_magic", enabled: true },
    { id: "filters", enabled: true },
    { id: "eye_retouch", enabled: true },
    { id: "makeup", enabled: true }
  ];
  $done({ body: JSON.stringify(body) });
}
