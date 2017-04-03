import Backbone from 'backbone';

import ListItemModel from '../models/listItem.js';

export default class ListItemsCollect extends Backbone.Collection {
    constructor(options) {
        super(options);
        this.model = ListItemModel;       
    }

}
