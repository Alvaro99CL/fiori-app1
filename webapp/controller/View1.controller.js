sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("logaliudemycli.logaliudemycli.controller.View1", {
			onInit: function () {
               const oJSONModel = new sap.ui.model.json.JSONModel(); 
               const oView = this.getView();

               oJSONModel.loadData("./model/SelectionScreenMenu.json");
               oView.setModel(oJSONModel,"selectionScreen");
            },
            
            onFilter: function () {

            },

            onClearFilter: function (){
                const oModelSelScreen = this.getView().getModel("selectionScreen");
                oModelSelScreen.setProperty("/ShipName", "");
                oModelSelScreen.setProperty("/CountryKey", "");
            }

		});
	});
