if (!$response?.body) $done({});

let json = JSON.parse($response.body);

json.data = {
  vip_status: 1,
  is_expire: 0,
  valid_time: 1752614400,
  invalid_time: 4070908800,
  expire_days: 26747,
  vip_type: 3,
  sub_type: 2,
  has_privilege: true,
  privilege_list: [
    "tech_magic",
    "filters",
    "makeup",
    "slim",
    "eye_retouch",
    "skin_retouch",
    "body_reshape",
    "blemish_removal",
    "tone_adjust",
    "bg_remove"
  ],
  rights: [
    { id: "tech_magic", status: 1 },
    { id: "filters", status: 1 },
    { id: "makeup", status: 1 },
    { id: "slim", status: 1 },
    { id: "eye_retouch", status: 1 },
    { id: "skin_retouch", status: 1 },
    { id: "body_reshape", status: 1 },
    { id: "blemish_removal", status: 1 },
    { id: "tone_adjust", status: 1 },
    { id: "bg_remove", status: 1 }
  ],
  privilege: [
    { name: "tech_magic", available: true },
    { name: "filters", available: true },
    { name: "makeup", available: true },
    { name: "slim", available: true },
    { name: "eye_retouch", available: true },
    { name: "skin_retouch", available: true },
    { name: "body_reshape", available: true },
    { name: "blemish_removal", available: true },
    { name: "tone_adjust", available: true },
    { name: "bg_remove", available: true }
  ]
};

$done({ body: JSON.stringify(json) });
