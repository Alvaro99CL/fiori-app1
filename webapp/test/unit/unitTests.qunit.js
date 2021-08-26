/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"logali_udemy_cli/logali_udemy_cli/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
