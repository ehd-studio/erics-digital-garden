---
tags:
  - bud
---

The [[Command Line Interface]] is a useful tool for record manipulation, system interactions, task automation, and infrastructure administration for teams.
## Basic Commands

This [[CLI Command List]] is a great starting point for navigating the basics of terminal commands.
## Shell Automations
[[Shell Configuration Files]] are an easy way to streamline commands for future use.
Here is an example of a simple [[bash]] shell command for manipulating image data: 

>`for i in *.tif; do sips -s format png $i--out ./pngs/${l//.tif/.png}; done` 
#### Breakdown
- `for i in *.tif`
    - Loops through every `.tif` file in the current directory.
- `do ... done`
    - Defines the commands to run for each file.
- `sips -s format png`
    - Uses macOS `sips` to convert the image format to PNG.
- `$i`
    - Refers to the current `.tif` file.
- `--out ./pngs/...`
    - Saves the converted file into the `pngs` folder.
- `${i//.tif/.png}`
    - Performs shell string replacement, changing the filename extension from `.tif` to `.png`