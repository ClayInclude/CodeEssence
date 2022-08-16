tsc = tsc --esModuleInterop true --skipLibCheck true
js_files = babel.config.js docusaurus.config.js

.PHONY: BuildConfig
BuildConfig: $(js_files)

$(js_files): %.js: %.ts
	$(tsc) $?

.PHONY: clear
.PHNOY: Clear
.PHONY: clean
.PHONY: Clean
clear: Clean
Clear: Clean
clean: Clean
Clean:
	del $(js_files)
