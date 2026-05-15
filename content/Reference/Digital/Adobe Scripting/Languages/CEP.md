**CEP (Common Extensibility Platform)** is an HTML5-based framework used to create custom plugins and persistent panels for Adobe applications. While Adobe is currently phasing it out in favor of the newer Unified Extensibility Platform (UXP), CEP remains the legacy framework powering the majority of third-party InDesign panels in production today.

CEP operates by loading a Chromium webview inside the application, allowing developers to build rich, interactive user interfaces using standard web technologies like HTML, CSS, and modern JavaScript frameworks such as React or Vue. To execute application-specific tasks, the CEP panel relies on a "CSInterface" bridge to communicate with underlying ExtendScript code.

Despite the industry transition to UXP, CEP still maintains several **critical use cases**:

- **Maintaining Legacy Panels in Production:** Because CEP still loads and functions in current Adobe application versions, it remains the right choice for maintaining existing panels. Developers are advised to keep legacy panels running on CEP and only migrate to UXP when substantive feature changes are required.
- **Node.js Workflows:** CEP provides direct access to Node.js APIs, making it essential for workflows that require complex filesystem and network operations, or for utilizing Node.js dependencies that haven't yet been ported to newer frameworks.
- **Accessing CEP-only APIs:** CEP is still necessary when a plugin relies on a small set of deep APIs that do not currently have equivalents in the modern UXP framework.
- **External API Connectivity:** It enables robust integration with external web services and APIs.
- **Cross-Application Functionality:** CEP plugins can be designed to work seamlessly across multiple different Adobe applications.
- **Advanced UI Design:** It supports the creation of highly complex, persistent panels that remain visible in the workspace while the designer works.