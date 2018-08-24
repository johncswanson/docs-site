(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{194:function(e,t,i){"use strict";i.r(t);var r=i(0),s=Object(r.a)({},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[e._m(0),e._v(" "),i("p",[e._v("After you install Zowe, you can optionally configure the terminal application plug-ins or modify the zLUX Proxy Server and ZSS configuration, if needed.")]),e._v(" "),e._m(1),e._v(" "),i("p",[e._v("Follow these optional steps to configure the default connection to open for the terminal application plug-ins.")]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),i("p",[e._v("The zLUX Proxy Server and ZSS rely on many parameters to run, which includes setting up networking, deployment directories, plug-in locations, and more.")]),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),e._m(14),e._v(" "),i("p",[e._v("The zLUX server can be accessed over HTTP, HTTPS, or both, provided it has been configured for either (or both).")]),e._v(" "),e._m(15),e._v(" "),i("p",[e._v("To configure the server for HTTP, complete these steps:")]),e._v(" "),e._m(16),e._v(" "),e._m(17),e._v(" "),i("p",[e._v("For HTTPS, specify the following parameters:")]),e._v(" "),e._m(18),e._v(" "),e._m(19),e._v(" "),e._m(20),e._v(" "),e._m(21),e._v(" "),i("p",[e._v("In the example configuration, both HTTP and HTTPS are specified:")]),e._v(" "),e._m(22),e._m(23),e._v(" "),e._m(24),e._v(" "),e._m(25),e._v(" "),i("p",[e._v("These directories dictate where the "),i("router-link",{attrs:{to:"./mvd-configdataservice.html"}},[e._v("Configuration Dataservice")]),e._v(" stores content.")],1),e._v(" "),e._m(26),e._v(" "),e._m(27),e._m(28),e._v(" "),i("p",[e._v("This topic describes application plug-ins that are defined in advance.")]),e._v(" "),e._m(29),e._v(" "),e._m(30),e._v(" "),i("p",[i("strong",[e._v("Note:")]),e._v(" In this example, the directory for these JSON files is "),i("a",{attrs:{href:"https://github.com/gizafoundation/zlux-example-server/tree/master/plugins",target:"_blank",rel:"noopener noreferrer"}},[e._v("/plugins"),i("OutboundLink")],1),e._v(". Yet, to separate configuration files from runtime files, the "),i("em",[e._v("zlux-example-server")]),e._v(" repository copies the contents of this folder into "),i("code",[e._v("/deploy/instance/ZLUX/plugins")]),e._v(". So, the example configuration file uses the latter directory.")]),e._v(" "),e._m(31),e._v(" "),e._m(32),e._m(33),e._v(" "),i("p",[e._v("For more information, see "),i("router-link",{attrs:{to:"./mvd-logutility.html"}},[e._v("Logging Utility")]),e._v(".")],1),e._v(" "),e._m(34),e._v(" "),e._m(35),e._v(" "),e._m(36),e._v(" "),e._m(37),e._v(" "),i("p",[e._v("When you run the zLUX Proxy Server, specify the following flags to declare which ZSS instance zLUX will proxy ZSS requests to:")]),e._v(" "),e._m(38),e._v(" "),e._m(39),e._v(" "),i("p",[e._v("The zLUX log files contain processing messages and statistics. zLUX generates log files in the following default locations:")]),e._v(" "),e._m(40),e._v(" "),i("p",[e._v("The Zowe Node Server logs and ZSS logs are timestamped in the format yyyy-mm-dd-hh-mm and older logs are deleted when a new log is created at server startup.")]),e._v(" "),e._m(41),e._v(" "),i("p",[e._v("zLUX writes log information to a file and to the screen. (On Windows, logs are written to a file only.)")]),e._v(" "),e._m(42),e._v(" "),e._m(43),e._v(" "),e._m(44),e._v(" "),e._m(45),e._v(" "),e._m(46),e._v(" "),e._m(47),e._v(" "),i("p",[e._v("If zLUX cannot create the directory or file, the server will run (but it might not perform logging properly).")]),e._v(" "),e._m(48),e._v(" "),e._m(49)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"zlux-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zlux-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" zLUX configuration")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"setting-up-terminal-application-plug-ins"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-terminal-application-plug-ins","aria-hidden":"true"}},[this._v("#")]),this._v(" Setting up terminal application plug-ins")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"setting-up-the-tn3270-mainframe-terminal-application-plug-in"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-the-tn3270-mainframe-terminal-application-plug-in","aria-hidden":"true"}},[this._v("#")]),this._v(" Setting up the TN3270 mainframe terminal application plug-in")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("_defaultTN3270.json")]),this._v(" is a file in "),t("code",[this._v("tn3270-ng2/")]),this._v(", which is deployed during setup. Within this file, you can specify the following parameters to configure the terminal connection:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v('  "host": <hostname>\n  "port": <port>\n  “security”: {\n  type: <”telnet” or “tls”>\n}\n')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"setting-up-the-vt-terminal-application-plug-in"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-the-vt-terminal-application-plug-in","aria-hidden":"true"}},[this._v("#")]),this._v(" Setting up the VT Terminal application plug-in")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("_defaultVT.json")]),this._v(" is a file in "),t("code",[this._v("vt-ng2/")]),this._v(", which is deployed during setup. Within this file, you can specify the following parameters to configure the terminal connection:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("“host”:<hostname>\n“port”:<port>\n“security”: {\n  type: <”telnet” or “ssh”>\n}\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"configuring-the-zlux-proxy-server-and-zss"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuring-the-zlux-proxy-server-and-zss","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuring the zLUX Proxy Server and ZSS")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"configuration-file"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuration-file","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration file")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("For convenience, the zLUX Proxy Server and ZSS read from a JSON file with a common structure. ZSS reads this file directly as a startup argument, while the zLUX Proxy Server as defined in the "),t("code",[this._v("zlux-proxy-server")]),this._v(" repository accepts several parameters, which are intended to be read from a JSON file through an implementer of the server, such as the example in the "),t("code",[this._v("zlux-example-server")]),this._v(" repository, the "),t("code",[this._v("js/zluxServer.js")]),this._v(" file. This file accepts a JSON file that specifies most, if not all, of the parameters needed. Other parameters can be provided through flags, if needed.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("An example JSON file can be found in the "),t("code",[this._v("zlux-example-server")]),this._v(" repository, in the zluxserver.json in the "),t("code",[this._v("config")]),this._v(" directory.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Note:")]),this._v(" All examples are based on the "),t("em",[this._v("zlux-example-server")]),this._v(" repository.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"network-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#network-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Network configuration")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Note:")]),this._v(" The following attributes are to be defined in the server's JSON configuration file.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"http"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http","aria-hidden":"true"}},[this._v("#")]),this._v(" HTTP")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ol",[i("li",[i("p",[e._v("Define an attribute "),i("em",[e._v("http")]),e._v(" within the top-level "),i("em",[e._v("node")]),e._v(" attribute.")])]),e._v(" "),i("li",[i("p",[e._v("Define "),i("em",[e._v("port")]),e._v(" within "),i("em",[e._v("http")]),e._v(". Where "),i("em",[e._v("port")]),e._v(" is an integer parameter for the TCP port on which the server will listen. Specify 80 or a value between 1024-65535.")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"https"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#https","aria-hidden":"true"}},[this._v("#")]),this._v(" HTTPS")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ol",[i("li",[i("p",[e._v("Define an attribute "),i("em",[e._v("https")]),e._v(" within the top-level "),i("em",[e._v("node")]),e._v(" attribute.")])]),e._v(" "),i("li",[i("p",[e._v("Define the following within "),i("em",[e._v("https")]),e._v(":")])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[i("em",[e._v("port")]),e._v(": An integer parameter for the TCP port on which the server will listen. Specify 443 or a value between 1024-65535.")]),e._v(" "),i("li",[i("em",[e._v("certificates")]),e._v(": An array of strings, which are paths to PEM format HTTPS certificate files.")]),e._v(" "),i("li",[i("em",[e._v("keys")]),e._v(": An array of strings, which are paths to PEM format HTTPS key files.")]),e._v(" "),i("li",[i("em",[e._v("pfx")]),e._v(": A string, which is a path to a PFX file which must contain certificates, keys, and optionally Certificate Authorities.")]),e._v(" "),i("li",[i("em",[e._v("certificateAuthorities")]),e._v(" (Optional): An array of strings, which are paths to certificate authorities files.")]),e._v(" "),i("li",[i("em",[e._v("certificateRevocationLists")]),e._v(" (Optional): An array of strings, which are paths to certificate revocation list (CRL) files.")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[i("strong",[e._v("Note:")]),e._v(" When using HTTPS, you must specify "),i("em",[e._v("pfx")]),e._v(", or both "),i("em",[e._v("certificates")]),e._v(" and "),i("em",[e._v("keys")]),e._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"network-example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#network-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Network example")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('  "node": {\n    "https": {\n      "port": 8544,\n      //pfx (string), keys, certificates, certificateAuthorities, and certificateRevocationLists are all valid here.\n      "keys": ["../deploy/product/ZLUX/serverConfig/server.key"],\n      "certificates": ["../deploy/product/ZLUX/serverConfig/server.cert"]\n    },\n    "http": {\n      "port": 8543\n    }\n  }\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"deploy-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deploy-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Deploy configuration")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("When the zLUX Proxy Server is running, it accesses the server's settings and reads or modifies the contents of its resource storage. All of this data is stored within the "),t("code",[this._v("Deploy")]),this._v(" folder hierarchy, which is spread out into a several scopes:")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[i("code",[e._v("Product")]),e._v(": The contents of this folder are not meant to be modified, but used as defaults for a product.")]),e._v(" "),i("li",[i("code",[e._v("Site")]),e._v(": The contents of this folder are intended to be shared across multiple zLUX Proxy Server instances, perhaps on a network drive.")]),e._v(" "),i("li",[i("code",[e._v("Instance")]),e._v(": This folder represents the broadest scope of data within the given zLUX Proxy Server instance.")]),e._v(" "),i("li",[i("code",[e._v("Group")]),e._v(": Multiple users can be associated into one group, so that settings are shared among them.")]),e._v(" "),i("li",[i("code",[e._v("User")]),e._v(": When authenticated, users have their own settings and storage for the application plug-ins that they use.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"deploy-example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deploy-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Deploy example")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('// All paths relative to zlux-example-server/js or zlux-example-server/bin\n// In real installations, these values will be configured during the installation process.\n  "rootDir":"../deploy",\n  "productDir":"../deploy/product",\n  "siteDir":"../deploy/site",\n  "instanceDir":"../deploy/instance",\n  "groupsDir":"../deploy/instance/groups",\n  "usersDir":"../deploy/instance/users"\n\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"application-plug-in-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#application-plug-in-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Application plug-in configuration")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("In the configuration file, you can specify a directory that contains JSON files, which tell the server what application plug-in to include and where to find it on disk. The backend of these application plug-ins use the server's plug-in structure, so much of the server-side references to application plug-ins use the term "),t("em",[this._v("plug-in")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("To include application plug-ins, define the location of the plug-ins directory in the configuration file, through the top-level attribute "),t("strong",[this._v("pluginsDir")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"plug-ins-directory-example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#plug-ins-directory-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Plug-ins directory example")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('// All paths relative to zlux-example-server/js or zlux-example-server/bin\n// In real installations, these values will be configured during the install process.\n//...\n  "pluginsDir":"../deploy/instance/ZLUX/plugins",\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"logging-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#logging-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Logging configuration")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"zss-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zss-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" ZSS configuration")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[e._v("Running ZSS requires a JSON configuration file that is similar or the same as the one used for the zLUX Proxy Server. The attributes that are needed for ZSS, at minimum, are:"),i("em",[e._v("rootDir")]),e._v(", "),i("em",[e._v("productDir")]),e._v(", "),i("em",[e._v("siteDir")]),e._v(", "),i("em",[e._v("instanceDir")]),e._v(", "),i("em",[e._v("groupsDir")]),e._v(", "),i("em",[e._v("usersDir")]),e._v(", "),i("em",[e._v("pluginsDir")]),e._v(" and "),i("em",[e._v("zssPort")]),e._v(". All of these attributes have the same meaning as described above for the Proxy Server, but if the Proxy Server and ZSS are not run from the same location, then these directories can be different.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The "),t("em",[this._v("zssPort")]),this._v(" attribute is specific to ZSS. This is the TCP port on which ZSS listens in order to be contacted by the zLUX server. Define this port in the configuration file as a value between 1024-65535.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"connecting-the-zlux-proxy-server-to-zss"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#connecting-the-zlux-proxy-server-to-zss","aria-hidden":"true"}},[this._v("#")]),this._v(" Connecting the zLUX Proxy Server to ZSS")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("em",[this._v("-h")]),this._v(': Declares the host where ZSS can be found. Use as "-h <hostname>"')]),this._v(" "),t("li",[t("em",[this._v("-P")]),this._v(': Declares the port at which ZSS is listening. Use as "-P <port>"')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"zlux-logging"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zlux-logging","aria-hidden":"true"}},[this._v("#")]),this._v(" zLUX logging")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Zowe Node Server: "),t("code",[this._v("zlux-example-server/log/nodeServer-yyyy-mm-dd-hh-mm.log")])]),this._v(" "),t("li",[this._v("ZSS: "),t("code",[this._v("zlux-example-server/log/zssServer-yyyy-mm-dd-hh-mm.log")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"controlling-the-zlux-logging-location"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#controlling-the-zlux-logging-location","aria-hidden":"true"}},[this._v("#")]),this._v(" Controlling the zLUX logging location")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"zlux-node-log-dir-and-zss-log-dir-environment-variables"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zlux-node-log-dir-and-zss-log-dir-environment-variables","aria-hidden":"true"}},[this._v("#")]),this._v(" ZLUX_NODE_LOG_DIR and ZSS_LOG_DIR environment variables")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("To control where the information is logged, use the environment variable "),t("em",[this._v("ZLUX_NODE_LOG_DIR")]),this._v(", for the Zowe Node Server, and "),t("em",[this._v("ZSS_LOG_DIR")]),this._v(", for ZSS. While these variables are intended to specify a directory, if you specify a location that is a file name, zLUX will write the logs to the specified file instead (for example: "),t("code",[this._v("/dev/null")]),this._v(" to disable logging).")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("When you specify the environment variables "),t("em",[this._v("ZLUX_NODE_LOG_DIR")]),this._v(" and "),t("em",[this._v("ZSS_LOG_DIR")]),this._v(" and you specify directories rather than files, zLUX will timestamp the logs and delete the older logs that exceed the "),t("em",[this._v("ZLUX_NODE_LOGS_TO_KEEP")]),this._v(" threshold.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"zlux-node-log-file-and-zss-log-file-environment-variables"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zlux-node-log-file-and-zss-log-file-environment-variables","aria-hidden":"true"}},[this._v("#")]),this._v(" ZLUX_NODE_LOG_FILE and ZSS_LOG_FILE environment variables")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("If you set the log file name for the node server by setting the "),t("em",[this._v("ZLUX_NODE_LOG_FILE")]),this._v(" environment variable, or if you set the log file for ZSS by setting the "),t("em",[this._v("ZSS_LOG_FILE")]),this._v(" environment variable, there will only be one log file, and it will be overwritten each time the server is launched.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Note")]),this._v(": When you set the "),t("em",[this._v("ZLUX_NODE_LOG_FILE")]),this._v(" or "),t("em",[this._v("ZSS_LOG_FILE")]),this._v(" environment variables, zLUX will not override the log names, set a timestamp, or delete the logs.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"retaining-logs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#retaining-logs","aria-hidden":"true"}},[this._v("#")]),this._v(" Retaining logs")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("By default, zLUX retains the last five logs. To specify a different number of logs to retain, set "),t("em",[this._v("ZLUX_NODE_LOGS_TO_KEEP")]),this._v(" (Zowe Node Server logs) or "),t("em",[this._v("ZSS_LOGS_TO_KEEP")]),this._v(" (ZSS logs) to the number of logs that you want to keep. For example, if you set "),t("em",[this._v("ZLUX_NODE_LOGS_TO_KEEP")]),this._v(" to 10, when the eleventh log is created, the first log is deleted. The default is 5.")])}],!1,null,null,null);s.options.__file="mvd-zluxconfiguration.md";t.default=s.exports}}]);