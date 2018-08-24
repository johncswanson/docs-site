(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{188:function(e,t,s){"use strict";s.r(t);var r=s(0),i=Object(r.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),s("p",[e._v("Before installing Zowe, ensure that your environment meets all of the prerequisites.")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),s("p",[e._v("The following information contains procedures and tips for meeting z/OSMF requirements. For complete information, go to "),s("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/SSLTBW_2.3.0/com.ibm.zos.v2r3/en/homepage.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("IBM Knowledge Center"),s("OutboundLink")],1),e._v(" and read the following documents.")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/en/SSLTBW_2.3.0/com.ibm.zos.v2r3.izua300/IZUHPINFO_PartConfiguring.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("IBM z/OS Management Facility Configuration Guide"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/SSLTBW_2.3.0/com.ibm.zos.v2r3.izu/izu.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("IBM z/OS Management Facility Help"),s("OutboundLink")],1)])]),e._v(" "),e._m(3),e._v(" "),s("p",[e._v("Ensure that the z/OS system meets the following requirements:")]),e._v(" "),s("table",[e._m(4),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("AXE (System REXX)")]),e._v(" "),s("td",[e._v("z/OS uses AXR (System REXX) component to perform Incident Log tasks. The component enables REXX executable files to run outside of conventional TSO and batch environments.")]),e._v(" "),s("td",[s("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/en/SSLTBW_2.3.0/com.ibm.zos.v2r3.ieaa800/systemrexx.htm",title:"System REXX",target:"_blank",rel:"noopener noreferrer"}},[e._v("System REXX"),s("OutboundLink")],1)])]),e._v(" "),s("tr",[s("td",[e._v("Common Event Adapter (CEA) server")]),e._v(" "),s("td",[e._v("The CEA server, which is a co-requisite of the Common Information Model (CIM) server, enables the ability for z/OSMF to deliver z/OS events to C-language clients.")]),e._v(" "),s("td",[s("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/en/SSLTBW_2.3.0/com.ibm.zos.v2r3.e0zb100/custcea.htm",title:"Customizing for CEA",target:"_blank",rel:"noopener noreferrer"}},[e._v("Customizing for CEA"),s("OutboundLink")],1)])]),e._v(" "),s("tr",[s("td",[e._v("Common Information Model (CIM) server")]),e._v(" "),s("td",[e._v("z/OSMF uses the CIM server to perform capacity-provisioning and workload-management tasks. Start the CIM server before you start z/OSMF (the IZU* started tasks).")]),e._v(" "),s("td",[s("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/en/SSLTBW_2.3.0/com.ibm.zos.v2r3.izua300/IZUHPINFO_AdditionalCIMStepsForZOS.htm",title:"Reviewing your CIM server setup",target:"_blank",rel:"noopener noreferrer"}},[e._v("Reviewing your CIM server setup"),s("OutboundLink")],1)])]),e._v(" "),s("tr",[s("td",[e._v("CONSOLE and CONSPROF commands")]),e._v(" "),s("td",[e._v("The CONSOLE and CONSPROF commands must exist in the authorized command table.")]),e._v(" "),s("td",[s("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/en/SSLTBW_2.3.0/com.ibm.zos.v2r3.ikjb400/consol.htm",title:"Customizing the CONSOLE and CONSPROF commands",target:"_blank",rel:"noopener noreferrer"}},[e._v("Customizing the CONSOLE and CONSPROF commands"),s("OutboundLink")],1)])]),e._v(" "),s("tr",[s("td",[e._v("IBM z/OS Provisioning Toolkit")]),e._v(" "),s("td",[e._v("The IBM® z/OS® Provisioning Toolkit is a command line utility that provides the ability to provision z/OS development environments. If you want to provision CICS or Db2 environments with the Zowe CLI, this toolkit is required.")]),e._v(" "),s("td",[s("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/en/SSLTBW_2.3.0/com.ibm.zos.v2r3.izsc300/cloudProvOverview.htm",title:"What is IBM Cloud Provisioning and Management for z/OS?",target:"_blank",rel:"noopener noreferrer"}},[e._v("What is IBM Cloud Provisioning and Management for z/OS? "),s("OutboundLink")],1)])]),e._v(" "),s("tr",[s("td",[e._v("Java level")]),e._v(" "),s("td",[e._v("IBM® 64-bit SDK for z/OS®, Java Technology Edition V7.1 or later is required.")]),e._v(" "),s("td",[s("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/SSLTBW_2.3.0/com.ibm.zos.v2r3.izua300/IZUHPINFO_SoftwarePrereqs.htm",title:"Software prerequisites for z/OSMF",target:"_blank",rel:"noopener noreferrer"}},[e._v("Software prerequisites for z/OSMF"),s("OutboundLink")],1)])]),e._v(" "),e._m(5),e._v(" "),e._m(6)])]),e._v(" "),e._m(7),e._v(" "),s("ol",[e._m(8),e._v(" "),s("li",[s("p",[e._v("Configure z/OSMF.")]),e._v(" "),s("p",[e._v("z/OSMF is a base element of z/OS V2.2 and V2.3, so it is already installed. But it might not be configured and running on every z/OS V2.2 and V2.3 system.")]),e._v(" "),s("p",[e._v("In short, to configure an instance of z/OSMF, run the IBM-supplied jobs IZUSEC and IZUMKFS, and then start the z/OSMF server.\nThe z/OSMF configuration process occurs in three stages, and in the following order:")]),e._v(" "),e._m(9),e._v(" "),s("p",[e._v("This stage sequence is critical to a successful configuration. For complete information about how to configure z/OSMF, see "),s("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/SSLTBW_2.2.0/com.ibm.zos.v2r2.izua300/IZUHPINFO_ConfiguringMain.htm",title:"Configuring z/OSMF",target:"_blank",rel:"noopener noreferrer"}},[e._v("Configuring z/OSMF for the first time"),s("OutboundLink")],1),e._v(" if you use z/OS V2.2 or "),s("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/SSLTBW_2.3.0/com.ibm.zos.v2r3.izua300/IZUHPINFO_ConfiguringMain.htm",title:"Setting up z/OSMF for the first time",target:"_blank",rel:"noopener noreferrer"}},[e._v("Setting up z/OSMF for the first time"),s("OutboundLink")],1),e._v(" if V2.3.")])])]),e._v(" "),e._m(10),e._v(" "),s("p",[e._v("The z/OS Operator Consoles task is new in Version 2.3. Applications that depend on access to the operator console such as Zowe CLI's RestConsoles API require Version 2.3.")]),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),s("p",[e._v("The Zowe CLI uses z/OSMF Representational State Transfer (REST) APIs to work with system resources and extract system data. Ensure that the following REST services are configured and available.")]),e._v(" "),s("table",[e._m(13),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("Cloud provisioning services")]),e._v(" "),e._m(14),e._v(" "),s("td",[s("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/SSLTBW_2.3.0/com.ibm.zos.v2r3.izua300/izuconfig_CloudProvSecuritySetup.htm",title:"Cloud provisioning services",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cloud provisioning services"),s("OutboundLink")],1)])]),e._v(" "),s("tr",[s("td",[e._v("TSO/E address space services")]),e._v(" "),e._m(15),e._v(" "),s("td",[s("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/SSLTBW_2.3.0/com.ibm.zos.v2r3.izua700/izuprog_API_TSOServices.htm",title:"TSO/E address space services",target:"_blank",rel:"noopener noreferrer"}},[e._v("TSO/E address space services"),s("OutboundLink")],1)])]),e._v(" "),s("tr",[s("td",[e._v("z/OS console services")]),e._v(" "),e._m(16),e._v(" "),s("td",[s("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/SSLTBW_2.3.0/com.ibm.zos.v2r3.izua700/IZUHPINFO_API_RESTCONSOLE.htm",title:"z/OS console",target:"_blank",rel:"noopener noreferrer"}},[e._v("z/OS console services"),s("OutboundLink")],1)])]),e._v(" "),s("tr",[s("td",[e._v("z/OS data set and file REST interface")]),e._v(" "),e._m(17),e._v(" "),s("td",[s("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/SSLTBW_2.3.0/com.ibm.zos.v2r3.izua700/IZUHPINFO_API_RESTFILES.htm",title:"z/OS data set and file interface",target:"_blank",rel:"noopener noreferrer"}},[e._v("z/OS data set and file REST interface"),s("OutboundLink")],1)])]),e._v(" "),s("tr",[s("td",[e._v("z/OS jobs REST interface")]),e._v(" "),e._m(18),e._v(" "),s("td",[s("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/SSLTBW_2.3.0/com.ibm.zos.v2r3.izua700/IZUHPINFO_API_RESTJOBS.htm",title:"z/OS jobs interface",target:"_blank",rel:"noopener noreferrer"}},[e._v("z/OS jobs REST interface"),s("OutboundLink")],1)])]),e._v(" "),s("tr",[s("td",[e._v("z/OSMF workflow services")]),e._v(" "),e._m(19),e._v(" "),s("td",[s("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/SSLTBW_2.3.0/com.ibm.zos.v2r3.izua700/izuprog_API_WorkflowServices.htm",title:"z/OSMF workflow services",target:"_blank",rel:"noopener noreferrer"}},[e._v("z/OSMF workflow services"),s("OutboundLink")],1)])])])]),e._v(" "),e._m(20),e._v(" "),s("p",[e._v("For more information, see "),s("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/SSLTBW_2.3.0/com.ibm.zos.v2r3.izua700/IZUHPINFO_RESTServices.htm",title:"Using the z/OSMF REST services",target:"_blank",rel:"noopener noreferrer"}},[e._v("Using the z/OSMF REST services"),s("OutboundLink")],1),e._v(" in IBM z/OSMF documentation.")]),e._v(" "),s("p",[e._v("To verify that z/OSMF REST services are configured correctly in your environment, enter the REST endpoint into your browser. For example: https://mvs.ibm.com:443/zosmf/restjobs/jobs")]),e._v(" "),e._m(21),e._v(" "),e._m(22),e._v(" "),e._m(23),e._v(" "),s("p",[e._v("zLUX, explorer server, and API Mediation Layer are installed together. Before the installation, make sure your system meets the following requirements:")]),e._v(" "),s("ul",[e._m(24),e._v(" "),e._m(25),e._v(" "),e._m(26),e._v(" "),e._m(27),e._v(" "),s("li",[s("p",[e._v("Node.js Version 6.11.2 or later on the z/OS host where you install the Zowe Node Server.")]),e._v(" "),s("ol",[s("li",[e._v("To install Node.js on z/OS, follow the procedures at "),s("a",{attrs:{href:"https://developer.ibm.com/node/sdk/ztp",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://developer.ibm.com/node/sdk/ztp"),s("OutboundLink")],1),e._v(". Note that installation of the C/C++ compiler is not necessary for running zLUX.")]),e._v(" "),e._m(28)])]),e._v(" "),e._m(29)]),e._v(" "),e._m(30),e._v(" "),s("p",[e._v("The following information is required during the installation process. Make the decisions before the installtion.")]),e._v(" "),e._m(31),e._v(" "),e._m(32),e._v(" "),s("p",[e._v("Before you install Zowe CLI, make sure your system meets the following requirements:")]),e._v(" "),e._m(33),e._v(" "),s("p",[e._v("You can install Zowe CLI on any Windows or Linux operating system. For more information about known issues and workarounds, see "),s("router-link",{attrs:{to:"./troubleshootinstall.html#troubleshooting-installing-zowe-cli"}},[e._v("Troubleshooting installing Zowe CLI")]),e._v(".")],1),e._v(" "),e._m(34),e._v(" "),e._m(35),e._v(" "),e._m(36),e._v(" "),e._m(37),e._v(" "),e._m(38),e._v(" "),s("p",[e._v("Zowe CLI is designed and tested to integrate with z/OSMF running on IBM z/OS Version 2.2 or later. Before you can use Zowe CLI to interact with the mainframe, system programmers must install and configure IBM z/OSMF in your environment. This section provides supplemental information about Zowe CLI-specific tips or requirements that system programmers can refer to.")]),e._v(" "),s("p",[e._v("Before you install Zowe CLI, also install the following prerequisite software depending on the system where you install Zowe CLI:")]),e._v(" "),e._m(39),e._v(" "),e._m(40),e._v(" "),s("p",[e._v("Windows operating systems require the following software:")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Node.js V8.0 or later")]),e._v(" "),s("p",[e._v("Click "),s("a",{attrs:{href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),s("OutboundLink")],1),e._v(" to download Node.js.")])]),e._v(" "),e._m(41),e._v(" "),e._m(42),e._v(" "),e._m(43)]),e._v(" "),e._m(44),e._v(" "),s("p",[e._v("Mac operating systems require the following software:")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Node.js V8.0 or later")]),e._v(" "),s("p",[e._v("Click "),s("a",{attrs:{href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),s("OutboundLink")],1),e._v(" to download Node.js.")])]),e._v(" "),e._m(45),e._v(" "),s("li",[s("p",[e._v("Python V2.7")]),e._v(" "),s("p",[e._v("Click "),s("a",{attrs:{href:"https://www.python.org/download/releases/2.7/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),s("OutboundLink")],1),e._v(" to download Python 2.7.")])]),e._v(" "),e._m(46)]),e._v(" "),e._m(47),e._v(" "),s("p",[e._v("Linux  operating systems require the following software:")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Node.js V8.0 or later")]),e._v(" "),s("p",[e._v("Click "),s("a",{attrs:{href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),s("OutboundLink")],1),e._v(" to download Node.js.")])]),e._v(" "),e._m(48),e._v(" "),e._m(49),e._v(" "),e._m(50),e._v(" "),e._m(51),e._v(" "),e._m(52)])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"system-requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#system-requirements","aria-hidden":"true"}},[this._v("#")]),this._v(" System requirements")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ol",[s("li",[s("p",[e._v("Ensure that IBM z/OS Management Facility (z/OSMF) is installed and configured correctly. z/OSMF is a prerequisite for the Zowe microservice that must be installed and running before you use Zowe. For details, see "),s("a",{attrs:{href:"#zosmf-requirements"}},[e._v("z/OSMF requirements")]),e._v(".")])]),e._v(" "),s("li",[s("p",[e._v("Review component specific requirements.")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#system-requirements-for-zlux-explorer-server-and-api-mediation-layer"}},[e._v("System requirements for zLUX, explorer server, and API Mediation")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#system-requirements-for-zowe-cli"}},[e._v("System requirements for Zowe CLI")])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"z-osmf-requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#z-osmf-requirements","aria-hidden":"true"}},[this._v("#")]),this._v(" z/OSMF requirements")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"z-os-requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#z-os-requirements","aria-hidden":"true"}},[this._v("#")]),this._v(" z/OS requirements")])},function(){var e=this.$createElement,t=this._self._c||e;return t("thead",[t("tr",[t("th",[this._v("Requirements")]),this._v(" "),t("th",[this._v("Description")]),this._v(" "),t("th",[this._v("Resources in IBM Knowledge Center")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("td",[this._v("TSO region size")]),this._v(" "),t("td",[this._v("To prevent "),t("strong",[this._v("exceeds maximum region size")]),this._v(" errors, verify that the TSO maximum region size is a minimum of 65536 KB for the z/OS system.")]),this._v(" "),t("td",[this._v("N/A")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("td",[this._v("User IDs")]),this._v(" "),t("td",[this._v("User IDs require a TSO segment (access) and an OMVS segment. During workflow processing and REST API requests, z/OSMF might start one or more TSO address spaces under the following job names: userid; substr(userid, 1, 6) CN (Console).")]),this._v(" "),t("td",[this._v("N/A")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"configuring-z-osmf"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuring-z-osmf","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuring z/OSMF")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("From the console, issue the following command to verify the version of z/OS:")]),this._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("/D IPLINFO\n")])])]),t("p",[this._v("Part of the output contains the release, for example,")]),this._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("RELEASE z/OS 02.02.00.\n")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Stage 1 - Security setup")]),this._v(" "),t("li",[this._v("Stage 2 - Configuration")]),this._v(" "),t("li",[this._v("Stage 3 - Server initialization")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Note:")]),this._v(" In z/OS V2.3, the base element z/OSMF is started by default at system initial program load (IPL). Therefore, z/OSMF is available for use as soon as you set up the system. If you prefer not to start z/OSMF automatically, disable the autostart function by checking for "),t("code",[this._v("START")]),this._v(" commands for the z/OSMF started procedures in the "),t("em",[this._v("COMMNDxx parmlib")]),this._v(" member.")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ol",{attrs:{start:"3"}},[s("li",[s("p",[e._v("Verify that the z/OSMF server and angel processes are running. From the command line, issue the following command:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("/D A,IZU*\n")])])]),s("p",[e._v("If jobs IZUANG1 and IZUSVR1 are not active, issue the following command to start the angel process:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("/S IZUANG1\n")])])]),s("p",[e._v('After you see the message ""CWWKB0056I INITIALIZATION COMPLETE FOR ANGEL"", issue the following command to start the server:')]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("/S IZUSVR1\n")])])]),s("p",[e._v('The server might take a few minutes to initialize. The z/OSMF server is available when the message ""CWWKF0011I: The server zosmfServer is ready to run a smarter planet."" is displayed.')])]),e._v(" "),s("li",[s("p",[e._v("Issue the following command to find the startup messages in the SDSF log of the z/OSMF server:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("f IZUG349I\n")])])]),s("p",[e._v("You could see a message similar to the following message, which indicates the port number:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("IZUG349I: The z/OSMF STANDALONE Server home page can be accessed at  https://mvs.hursley.ibm.com:443/zosmf after the z/OSMF server is started on your system.\n")])])]),s("p",[e._v("In this example, the port number is 443. You will need this port number later.")]),e._v(" "),s("p",[e._v("Point your browser at the nominated z/OSMF STANDALONE Server home page and you should see its Welcome Page where you can log in.")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"z-osmf-rest-services-for-the-zowe-cli"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#z-osmf-rest-services-for-the-zowe-cli","aria-hidden":"true"}},[this._v("#")]),this._v(" z/OSMF REST services for the Zowe CLI")])},function(){var e=this.$createElement,t=this._self._c||e;return t("thead",[t("tr",[t("th",[this._v("z/OSMF REST services")]),this._v(" "),t("th",[this._v("Requirements")]),this._v(" "),t("th",[this._v("Resources in IBM knowledge Center")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("td",[this._v("Cloud provisioning services are required for the Zowe CLI CICS and Db2 command groups. Endpoints begin with "),t("code",[this._v("/zosmf/provisioning/")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("td",[this._v("TSO/E address space services are required to issue TSO commands in the Zowe CLI. Endpoints begin with "),t("code",[this._v("/zosmf/tsoApp")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("td",[this._v("z/OS console services are required to issue console commands in the Zowe CLI. Endpoints begin with "),t("code",[this._v("/zosmf/restconsoles/")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("td",[this._v("z/OS data set and file REST interface is required to work with mainframe data sets and UNIX System Services files in the Zowe CLI. Endpoints begin with "),t("code",[this._v("/zosmf/restfiles/")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("td",[this._v("z/OS jobs REST interface is required to use the zos-jobs command group in the Zowe CLI. Endpoints begin with "),t("code",[this._v("/zosmf/restjobs/")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("td",[this._v("z/OSMF workflow services is required to create and manage z/OSMF workflows on a z/OS system. Endpoints begin with "),t("code",[this._v("/zosmf/workflow/")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Zowe uses symbolic links to the z/OSMF "),t("code",[this._v("bootstrap.properties")]),this._v(", "),t("code",[this._v("jvm.security.override.properties")]),this._v(", and "),t("code",[this._v("ltpa.keys")]),this._v(" files. Zowe reuses SAF, SSL, and LTPA configurations; therefore, they must be valid and complete.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Note:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Browsing z/OSMF endpoints requests your user ID and password for defaultRealm; these are your TSO user credentials.")]),this._v(" "),t("li",[this._v("The browser returns the status code 200 and a list of all jobs on the z/OS system. The list is in raw JSON format.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"system-requirements-for-zlux-explorer-server-and-api-mediation-layer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#system-requirements-for-zlux-explorer-server-and-api-mediation-layer","aria-hidden":"true"}},[this._v("#")]),this._v(" System requirements for zLUX, explorer server, and API Mediation Layer")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("z/OS® Version 2.2 or later.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("64-bit Java™ 8 JRE or later.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("833 MB of HFS file space.")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("li",[s("p",[e._v("Supported browsers:")]),e._v(" "),s("ul",[s("li",[e._v("Chrome 54 or later")]),e._v(" "),s("li",[e._v("Firefox 44 or later")]),e._v(" "),s("li",[e._v("Safari 11 or later")]),e._v(" "),s("li",[e._v("Microsoft Edge")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("Set the "),t("em",[this._v("NODE_HOME")]),this._v(" environment variable to the directory where Node.js is installed. For example, "),t("code",[this._v("NODE_HOME=/proj/mvd/node/installs/node-v6.11.2-os390-s390x")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("npm 5.4 or later for building zLUX applications.")]),this._v(" "),t("p",[this._v("To update npm, issue the following command:")]),this._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("npm install -g npm\n")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"planning-for-installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#planning-for-installation","aria-hidden":"true"}},[this._v("#")]),this._v(" Planning for installation")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[s("p",[e._v("The HFS directory where you install Zowe, for example, "),s("code",[e._v("/var/zowe")]),e._v(".")])]),e._v(" "),s("li",[s("p",[e._v("The HFS directory that contains a 64-bit Java™ 8 JRE.")])]),e._v(" "),s("li",[s("p",[e._v("The z/OSMF installation directory that contains "),s("code",[e._v("derby.jar")]),e._v(", for example, "),s("code",[e._v("/usr/lpp/zosmf/lib")]),e._v(".")])]),e._v(" "),s("li",[s("p",[e._v("The z/OSMF configuration user directory that contains the following z/OSMF files:")]),e._v(" "),s("pre",[s("code",[e._v("- `/bootstrap.properties`\n\n- `/jvm.security.override.properties`\n\n- `/resources/security/ltpa.keys`\n")])])]),e._v(" "),s("li",[s("p",[e._v("The HTTP and HTTPS port numbers of the explorer server. By default, they are 7080 and 7443.")])]),e._v(" "),s("li",[s("p",[e._v("The API Mediation Layer HTTP and HTTPS port numbers. You will be asked for 3 unique port numbers.")])]),e._v(" "),s("li",[s("p",[e._v("The user ID that runs the Zowe started task.")]),e._v(" "),s("p",[s("strong",[e._v("Tip:")]),e._v(" Use the same user ID that runs the z/OSMF "),s("code",[e._v("IZUSVR1")]),e._v(" task, or a user ID with equivalent authorizations.")])]),e._v(" "),s("li",[s("p",[e._v("The mainframe account under which the ZSS server runs must have UPDATE permission on the "),s("code",[e._v("BPX.DAEMON")]),e._v(" and "),s("code",[e._v("BPX.SERVER")]),e._v(" facility class profiles.")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"system-requirements-for-zowe-cli"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#system-requirements-for-zowe-cli","aria-hidden":"true"}},[this._v("#")]),this._v(" System requirements for Zowe CLI")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"supported-platforms"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#supported-platforms","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported platforms")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Important!")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Zowe CLI is not officially supported on Mac computers. However, Zowe CLI "),t("em",[this._v("might")]),this._v(" run successfully on some Mac computers.")]),this._v(" "),t("li",[this._v("Oracle Linux 6 is not supported.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"free-disk-space"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#free-disk-space","aria-hidden":"true"}},[this._v("#")]),this._v(" Free disk space")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Zowe CLI requires approximately "),t("strong",[this._v("100 MB")]),this._v(" of free disk space. The actual quantity of free disk space consumed might vary depending on the operating system where you install Zowe CLI.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"prerequisite-software"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prerequisite-software","aria-hidden":"true"}},[this._v("#")]),this._v(" Prerequisite software")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Note:")]),this._v(" It's highly recommended that you update Node.js regularly to the latest Long Term Support (LTS) version.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"windows-operating-systems"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#windows-operating-systems","aria-hidden":"true"}},[this._v("#")]),this._v(" Windows operating systems")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("Node Package Manager (npm) V5.0 or later")]),this._v(" "),t("p",[t("strong",[this._v("Note:")]),this._v(" npm is included with the Node.js installation.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("Python V2.7")]),this._v(" "),t("p",[this._v("The command that installs C++ Compiler also installs Python on Windows.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("C++ Compiler (gcc 4.8.1 or later)")]),this._v(" "),t("p",[this._v("From an administrator command prompt, issue the following command:")]),this._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("npm install --global --production --add-python-to-path windows-build-tools\n")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"mac-operating-systems"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mac-operating-systems","aria-hidden":"true"}},[this._v("#")]),this._v(" Mac operating systems")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("li",[s("p",[e._v("Node Package Manager (npm) V5.0 or later")]),e._v(" "),s("p",[s("strong",[e._v("Note:")]),e._v(" npm is included with the Node.js installation.")]),e._v(" "),s("p",[s("strong",[e._v("Tip:")]),e._v(" If you install Node.js on a macOS operating system, it's highly recommended that you follow the instructions on the Node.js website (using package manager) to install "),s("code",[e._v("nodejs")]),e._v(" and "),s("code",[e._v("nodejs-legacy")]),e._v(". For example, you can issue command "),s("code",[e._v("sudo apt install nodejs-legacy")]),e._v(" to install "),s("code",[e._v("nodejs-legacy")]),e._v(". With "),s("code",[e._v("nodejs-legacy")]),e._v(", you can issue command "),s("code",[e._v("node")]),e._v(" rather than "),s("code",[e._v("nodejs")]),e._v(".")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("C ++ Compiler (gcc 4.8.1 or later)")]),this._v(" "),t("p",[this._v("The gcc compiler is included with macOS. To confirm that you have the compiler, issue the command "),t("code",[this._v("gcc –help")]),this._v(".")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"linux-operating-systems"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux-operating-systems","aria-hidden":"true"}},[this._v("#")]),this._v(" Linux operating systems")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("li",[s("p",[e._v("Node Package Manager (npm) V5.0 or later")]),e._v(" "),s("p",[s("strong",[e._v("Note:")]),e._v(" npm is included with the Node.js installation.")]),e._v(" "),s("p",[s("strong",[e._v("Tip:")]),e._v(" If you install Node.js on a Linux operating system, it's highly recommended that you follow the instructions on the Node.js website (using package manager) to install "),s("code",[e._v("nodejs")]),e._v(" and "),s("code",[e._v("nodejs-legacy")]),e._v(". For example, you can issue command "),s("code",[e._v("sudo apt install nodejs-legacy")]),e._v(" to install "),s("code",[e._v("nodejs-legacy")]),e._v(". With "),s("code",[e._v("nodejs-legacy")]),e._v(", you can issue command "),s("code",[e._v("node")]),e._v(" rather than "),s("code",[e._v("nodejs")]),e._v(".")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("Python V2.7")]),this._v(" "),t("p",[this._v("Included with most Linux distributions.")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("li",[s("p",[e._v("C ++ Compiler (gcc 4.8.1 or later)")]),e._v(" "),s("p",[e._v("Gcc is included with most Linux distributions. To confirm that gcc is installed, issue the command "),s("code",[e._v("gcc –version")]),e._v(".")]),e._v(" "),s("p",[e._v("To install gcc, issue one of the following commands:")]),e._v(" "),s("ul",[s("li",[e._v("Red Hat"),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("sudo yum install gcc\n")])])])]),e._v(" "),s("li",[e._v("Debian/Ubuntu"),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("sudo apt-get update\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("sudo apt-get install build-essential\n")])])])]),e._v(" "),s("li",[e._v("Arch Linux"),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("sudo pacman -S gcc\n")])])])])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("li",[s("p",[e._v("Libsecret")]),e._v(" "),s("p",[e._v("To install Libsecret, issue one of the following commands:")]),e._v(" "),s("ul",[s("li",[e._v("Red Hat"),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("sudo yum install libsecret-devel\n")])])])]),e._v(" "),s("li",[e._v("Debian/Ubuntu"),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("sudo apt-get install libsecret-1-dev\n")])])])]),e._v(" "),s("li",[e._v("Arch Linux"),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("sudo pacman -S libsecret\n")])])])])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("li",[s("p",[e._v("Make")]),e._v(" "),s("p",[e._v("Make is included with most Linux distributions. To confirm that Make is installed, issue the command "),s("code",[e._v("make –-version")]),e._v(".")]),e._v(" "),s("p",[e._v("To install Make, issue one of the following commands:")]),e._v(" "),s("ul",[s("li",[e._v("Red Hat"),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("sudo yum install devtoolset-7\n")])])])]),e._v(" "),s("li",[e._v("Debian/Ubuntu"),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("sudo apt-get install build-essential\n")])])])]),e._v(" "),s("li",[e._v("Arch Linux"),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("sudo pacman -S base-devel\n")])])])])])])}],!1,null,null,null);i.options.__file="planinstall.md";t.default=i.exports}}]);