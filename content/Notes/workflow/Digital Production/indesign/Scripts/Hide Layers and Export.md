This script will identify folders across multiple InDesign files with included `var` values and turn them off before exporting.
### How to use
- Create/export a new Extended Script file in VS Code
	- Identify what layers you want to hide and substitute them with the `layerName` variable in this block
	```
	try {  
            doNotPrintLayer = doc.layers.item(layerName);  
            if (doNotPrintLayer.isValid) {  
                originalVisibility = doNotPrintLayer.visible;  
                doNotPrintLayer.visible = false;  
            }  
	```
- Drop script into InDesign `User/Scripts` Folder
- Create local folders for INDD files you want to run script on and where exported files can land.
- Run script
	- You will be prompted to select INDD files to export and where to drop exported JPG files
---
```
function Main() {  
    // Ask user to select multiple InDesign files  
    var files = File.openDialog("Select InDesign files to export first page as JPG", "*.indd", true);  
    if (!files || files.length === 0) {  
        alert("No files selected. Exiting.");  
        return;  
    }  
  
    // Ask user for destination folder  
    var destFolder = Folder.selectDialog("Select a folder to save the JPG files");  
    if (!destFolder) {  
        alert("Export canceled.");  
        return;  
    }  
  
    for (var i = 0; i < files.length; i++) {  
        var doc;  
        try {  
            doc = app.open(files[i], false); // false = do not show window  
        } catch (e) {  
            alert("Failed to open file:\n" + files[i].fsName + "\n" + e);  
            continue;  
        }  
  
        var layerName = "DO NOT PRINT";  
        var layerGradientWarm = "Grad Warm";  
        var layerGradientCool = "Grad Cool";  
        var doNotPrintLayer = null;  
        var originalVisibility = null;  
  
        // Try to find and hide the layer  
        try {  
            doNotPrintLayer = doc.layers.item(layerName);  
            if (doNotPrintLayer.isValid) {  
                originalVisibility = doNotPrintLayer.visible;  
                doNotPrintLayer.visible = false;  
            }  
  
            // doNotPrintLayer = doc.layers.item(layerGradientWarm);  
            // if (doNotPrintLayer.isValid) {  
               //  originalVisibility = doNotPrintLayer.visible;  
                // doNotPrintLayer.visible = false;  
            // }  
  
            // doNotPrintLayer = doc.layers.item(layerGradientCool);  
            // if (doNotPrintLayer.isValid) {  
                // originalVisibility = doNotPrintLayer.visible;  
                // doNotPrintLayer.visible = false;  
            // }  
        } catch (e) {}  
  
        // Build file name and path  
        var fileName = doc.name.replace(/\.[^\.]+$/, "") + ".jpg";  
        var outFile = File(destFolder.fsName + "/" + fileName);  
  
        // Configure JPEG export preferences  
        var firstPage = doc.pages[0];  
        with (app.jpegExportPreferences) {  
            exportResolution = 300;  
            jpegQuality = JPEGOptionsQuality.maximum;  
            jpegRenderingStyle = JPEGOptionsFormat.BASELINE_ENCODING;  
            jpegColorSpace = JpegColorSpaceEnum.RGB;  
            embedColorProfile = true;  
            antiAlias = true;  
            simulateOverprint = true;  
            useDocumentBleed = false;  
            exportingSpread = false;  
            pageString = firstPage.name;    
        }  
  
        // Perform export  
        try {  
            doc.exportFile(ExportFormat.JPG, outFile);  
            $.writeln("Exported: " + outFile.fsName);  
        } catch (err) {  
            alert("Failed to export JPEG for:\n" + [doc.name](http://doc.name/) + "\n" + err);  
        }  
  
        // Restore original visibility  
        if (doNotPrintLayer && originalVisibility !== null) {  
            try { doNotPrintLayer.visible = originalVisibility; } catch (e) {}  
        }  
  
        // Close the document without saving  
        try { doc.close(SaveOptions.NO); } catch (e) {}  
    }  
  
    alert("Export complete for " + files.length + " files.");  
}  
  
// Run it  
Main();
```