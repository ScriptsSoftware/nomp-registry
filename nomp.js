#!/usr/bin/env node

const { execSync } = require("child_process");

const args = process.argv.slice(2);

if (args.length === 0) {
  console.log("nomp - Package Manager");
  console.log("Usage:");
  console.log("  nomp install <package>");
  console.log("  nomp uninstall <package>");
  console.log("  nomp update <package>");
  console.log("  nomp list");
  process.exit(0);
}

const command = args[0];

try {

  if (command === "install") {
    const pkg = args[1];

    if (!pkg) {
      console.log("Error: specify a package.");
      process.exit(1);
    }

    console.log(`Installing ${pkg}...`);
    execSync(`npm install ${pkg}`, { stdio: "inherit" });
  }

  else if (command === "uninstall") {
    const pkg = args[1];

    if (!pkg) {
      console.log("Error: specify a package.");
      process.exit(1);
    }

    console.log(`Uninstalling ${pkg}...`);
    execSync(`npm uninstall ${pkg}`, { stdio: "inherit" });
  }

  else if (command === "update") {
    const pkg = args[1];

    if (pkg) {
      console.log(`Updating ${pkg}...`);
      execSync(`npm update ${pkg}`, { stdio: "inherit" });
    } else {
      console.log("Updating all packages...");
      execSync(`npm update`, { stdio: "inherit" });
    }
  }

  else if (command === "list") {
    execSync(`npm list`, { stdio: "inherit" });
  }

  else {
    console.log(`Unknown command: ${command}`);
  }

} catch {
  console.log("Command failed.");
}
