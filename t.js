if (!$response?.body) $done({});

const url = $request.url;
let body = JSON.parse($response.body);

if (url.includes("/vip_info_by_group")) {
  body.data = {
    vip_status: 1,
    is_expire: 0,
    valid_time: 1752614400,
    invalid_time: 4070908800,
    expire_days: 26747,
    vip_type: 3,
    sub_type: 3,
    has_privilege: true,
    privilege_list: [
      "tech_magic",
      "filters",
      "makeup",
      "slim",
      "eye_retouch"
    ],
    rights: [
      { id: "tech_magic", status: 1 },
      { id: "filters", status: 1 },
      { id: "makeup", status: 1 },
      { id: "slim", status: 1 },
      { id: "eye_retouch", status: 1 }
    ],
    privilege: [
      { name: "tech_magic", available: true },
      { name: "filters", available: true },
      { name: "makeup", available: true },
      { name: "slim", available: true },
      { name: "eye_retouch", available: true }
    ]
  };
  $done({ body: JSON.stringify(body) });
}

else if (url.includes("api.revenuecat.com/v1/subscribers")) {
  body.subscriber = {
    entitlements: {
      pro: {
        expires_date: "2099-01-01T00:00:00Z",
        product_identifier: "com.meitu.vip.yearly",
        purchase_date: "2025-07-16T00:00:00Z"
      }
    },
    subscriptions: {
      "com.meitu.vip.yearly": {
        billing_issues_detected_at: null,
        expires_date: "2099-01-01T00:00:00Z",
        is_sandbox: false,
        original_purchase_date: "2025-07-16T00:00:00Z",
        period_type: "normal",
        purchase_date: "2025-07-16T00:00:00Z",
        store: "app_store",
        unsubscribe_detected_at: null
      }
    }
  };
  $done({ body: JSON.stringify(body) });
}

else {
  $done({});
}
