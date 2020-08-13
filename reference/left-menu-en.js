const data = [
    [null, 1, null, [
        ["Home", 2, "/ac/home", [], 1, "//www.gstatic.com/images/icons/material/system/1x/home_grey600_24dp.png", false],
        ["Dashboard", 3, "/ac/dashboard", [], 1, "//www.gstatic.com/images/icons/material/system/1x/dashboard_grey600_24dp.png", false, null, "//www.gstatic.com/apps/cpanel/resources/img/dashboard-googblue-48.png", "See relevant insights about your organization"],
        ["Directory", 4, null, [
            ["Users", 12, "/ac/users", [], 1, null, false, null, "//www.gstatic.com/apps/cpanel/resources/img/people-quantum-48.svg", "Add or manage users"],
            ["Groups", 72, "/ac/groups", [], 1, null, false, null, "//www.gstatic.com/apps/cpanel/resources/img/groups-quantum-48.svg", "Create groups and mailing lists"],
            ["Organizational units", 38, "/ac/orgunits", [], 1, null, false, null, "//www.gstatic.com/images/icons/material/system/2x/account_tree_googblue_48dp.png", "Add, remove, rename, move or search for an organizational unit"],
            ["Buildings and resources", 47, "/ac/calendarresources", [
                ["Manage resources", null, "/ac/calendarresources/resources", [], 1, null, false],
                ["Room insights", null, "/ac/roominsights/utilization", [], 1, null, false],
                ["Room settings", null, "/ac/calendarresources/settings", [], 1, null, false]
            ], 3, null, false, null, "//www.gstatic.com/apps/cpanel/resources/img/ic_domain_googblue_48dp.svg", "Manage and monitor buildings, rooms and resources"],
            ["Directory settings", 66, "/ac/appsettings/986128716205", [], 1, null, false]
        ], 3, "//www.gstatic.com/images/icons/material/system/1x/person_grey600_24dp.png"],
        ["Devices", 5, "/ac/dm", [
            ["Mobile \u0026 endpoints", 25, "/ac/devices/list", [
                ["Devices", null, "/ac/devices/list", [], 1, null, false],
                ["Company owned inventory", null, "/ac/devices/list/companyowned", [], 1, null, false],
                ["Settings", null, "/ac/appsettings/724141353720?vid\u003dEMM_WINDOWS_MANAGEMENT_VIEW", [
                    ["Windows settings", null, "/ac/appsettings/724141353720?vid\u003dEMM_WINDOWS_MANAGEMENT_VIEW", [], 1, null, false],
                    ["Setup", null, "/AdminHome#MobileSettings:section\u003dsetup", [], 1, null, true],
                    ["Password settings", null, "/AdminHome#MobileSettings:section\u003dpassword\u0026flyout\u003dpassword", [], 1, null, true],
                    ["Third-party integrations", null, "/ac/devices/settings/thirdparty", [], 1, null, false]
                ], 3, null, false]
            ], 3, null, false],
            ["Networks", 28, "/ac/networks/", [], 1, null, false]
        ], 3, "//www.gstatic.com/images/icons/material/system/1x/devices_grey600_24dp.png", false, null, "//www.gstatic.com/apps/cpanel/resources/img/device-management-quantum-48.svg", "Secure corporate data on devices"],
        ["Apps", 97, "/ac/apps", [
            ["G Suite", 21, "/ac/appslist/core", [], 2, null, false],
            ["Additional Google services", 22, "/ac/appslist/additional", [], 1, null, false],
            ["G Suite Marketplace apps", 23, "/ac/apps/gmail/marketplace/domaininstall", [
                ["Apps list", null, "/ac/apps/gmail/marketplace/domaininstall", [], 1, null, false],
                ["Settings", null, "/ac/apps/gmail/marketplace/settings", [], 1, null, false]
            ], 3, null, false],
            ["SAML apps", 24, "/AdminHome#AppsList:serviceType\u003dSAML_APPS", [], 1, null, true]
        ], 3, "//www.gstatic.com/images/icons/material/system/1x/play_apps_grey600_24dp.png", false, null, "//www.gstatic.com/apps/cpanel/resources/img/apps-hub-48.png", "Manage apps and their settings"],
        ["Security", 104, "/ac/appsettings/352555445522", [
            ["Alert center", 60, "/ac/ac", [], 1, null, false],
            ["API controls", 81, "/ac/owl", [], 1, null, false],
            ["Security rules", 94, "/ac/ax?ruleTypeFilter\u003dALERT_CENTER", [], 1, null, false],
            ["Settings", 105, "/ac/appsettings/352555445522", [], 1, null, false]
        ], 3, "//www.gstatic.com/images/icons/material/system/1x/security_grey600_24dp.png", false, null, "//www.gstatic.com/apps/cpanel/resources/img/security-quantum-48.svg", "Configure security settings"],
        ["Reporting", 8, null, [
            ["Highlights", 108, "/ac/reporting/home", [], 1],
            ["Reports", 33, "/ac/reporting/home", [], 2, null, null, null, "//www.gstatic.com/apps/cpanel/resources/img/reports-quantum-48.svg", "Monitor usage across your organization"],
            ["Audit", 35, "/ac/reporting/audit/admin", [], 2],
            ["Alerts", 34, "/ac/ax?ruleTypeFilter\u003dALERT_CENTER\u0026ref\u003dreporting\u0026ruleType\u003dreporting,system_defined", [], 1, null, false]
        ], 3, "//www.gstatic.com/images/icons/material/system/1x/insert_chart_grey600_24dp.png"],
        ["Billing", 10, "/AdminHome#DomainSettings/subtab\u003dsubscriptions", [
            ["Subscriptions", 102, "/AdminHome#DomainSettings/subtab\u003dsubscriptions", [], 1, null, true],
            ["Billing accounts", 84, "/ac/billing/accounts", [], 1, null, false],
            ["Get more services", 107, "/ac/billing/catalog", [], 1, null, false]
        ], 3, "//www.gstatic.com/images/icons/material/system/1x/payment_grey600_24dp.png", true, null, "//www.gstatic.com/apps/cpanel/resources/img/billing-quantum-48.svg", "Manage subscriptions and billing"],
        ["Account", 11, null, [
            ["Account settings", 76, "/ac/accountsettings", [], 1, null, false, null, "//www.gstatic.com/apps/cpanel/resources/img/account-settings.svg", "Update information about your company"],
            ["Admin roles", 15, "/ac/roles", [], 1, null, false, null, "//www.gstatic.com/apps/cpanel/resources/img/admin-roles-quantum-48.svg", "Manage administrative roles"],
            ["Domains", 16, "/ac/domains", [
                ["Manage domains", null, "/ac/domains/manage", [], 1, null, false, null, "//www.gstatic.com/apps/cpanel/resources/img/domains-quantum-48.svg"],
                ["Whitelisted domains", null, "/ac/domains/whitelisted", [], 1, null, false, null, "//www.gstatic.com/apps/cpanel/resources/img/domains-quantum-48.svg"]
            ], 3, null, false, null, "//www.gstatic.com/apps/cpanel/resources/img/domains-quantum-48.svg", "Manage your domains"],
            ["Data migration", 17, "/ac/dms", [], 1, null, false, null, "//www.gstatic.com/apps/cpanel/resources/img/migration-quantum-48.svg", "Manage migration"]
        ], 3, "//www.gstatic.com/images/icons/material/system/1x/alternate_email_grey600_24dp.png"],
        [null, 41, null, [], null, null, null, false],
        [null, 42, null, [], null, null, null, false]
    ], 3],
    true,
    [
        [3, "/ac/dashboard", "Dashboard", "//www.gstatic.com/apps/cpanel/resources/img/dashboard-googblue-48.png", "See relevant insights about your organization", false],
        [12, "/ac/users", "Users", "//www.gstatic.com/apps/cpanel/resources/img/people-quantum-48.svg", "Add or manage users", false],
        [72, "/ac/groups", "Groups", "//www.gstatic.com/apps/cpanel/resources/img/groups-quantum-48.svg", "Create groups and mailing lists", false],
        [38, "/ac/orgunits", "Organizational units", "//www.gstatic.com/images/icons/material/system/2x/account_tree_googblue_48dp.png", "Add, remove, rename, move or search for an organizational unit", false],
        [47, "/ac/calendarresources", "Buildings and resources", "//www.gstatic.com/apps/cpanel/resources/img/ic_domain_googblue_48dp.svg", "Manage and monitor buildings, rooms and resources", false],
        [5, "/ac/dm", "Devices", "//www.gstatic.com/apps/cpanel/resources/img/device-management-quantum-48.svg", "Secure corporate data on devices", false],
        [97, "/ac/apps", "Apps", "//www.gstatic.com/apps/cpanel/resources/img/apps-hub-48.png", "Manage apps and their settings", false],
        [104, "/ac/appsettings/352555445522", "Security", "//www.gstatic.com/apps/cpanel/resources/img/security-quantum-48.svg", "Configure security settings", false],
        [33, "/ac/reporting/home", "Reports", "//www.gstatic.com/apps/cpanel/resources/img/reports-quantum-48.svg", "Monitor usage across your organization", false],
        [10, "/AdminHome#DomainSettings/subtab\u003dsubscriptions", "Billing", "//www.gstatic.com/apps/cpanel/resources/img/billing-quantum-48.svg", "Manage subscriptions and billing", true],
        [76, "/ac/accountsettings", "Account settings", "//www.gstatic.com/apps/cpanel/resources/img/account-settings.svg", "Update information about your company", false],
        [15, "/ac/roles", "Admin roles", "//www.gstatic.com/apps/cpanel/resources/img/admin-roles-quantum-48.svg", "Manage administrative roles", false],
        [16, "/ac/domains", "Domains", "//www.gstatic.com/apps/cpanel/resources/img/domains-quantum-48.svg", "Manage your domains", false],
        [17, "/ac/dms", "Data migration", "//www.gstatic.com/apps/cpanel/resources/img/migration-quantum-48.svg", "Manage migration", false],
        [42, "https://support.google.com/a", "Support", "https://ssl.gstatic.com/apps/cpanel/resources/img/ic_support_48_v2.svg", "Talk to our support team", false]
    ]
]