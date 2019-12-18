/*
 * Copyright (C) 2019 con terra GmbH (info@conterra.de)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import PopupDefinitionFactory from "./PopupDefinitionFactory";

export default class DomainPopupsFactory {

    activate(componentContext) {
        this._bundleContext = componentContext.getBundleContext();

        const props = this._properties;
        props.popupTemplates.forEach((template) => {
            this.registerPopupTemplate(template);
        })
    }

    deactivate() {
        const registration = this._serviceregistration;

        // clear the reference
        this._serviceregistration = null;

        if (registration) {
            // call unregister
            registration.unregister();
        }
    }

    registerPopupTemplate(props) {
        const template = new PopupDefinitionFactory(props);
        const interfaces = ["popups.PopupDefinitionFactory"];
        this._serviceregistration = this._bundleContext.registerService(interfaces, template);
    }
}
