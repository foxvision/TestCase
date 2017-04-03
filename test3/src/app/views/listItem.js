import Backbone from 'backbone';

import $ from 'jquery';

import _ from 'underscore';

import ListItemTemp from '../templates/listItem.hbs';

export default class ListItemView extends Backbone.View {

    get tagName() {
        return 'tr' }

    get events () {

        return { "click": "deleteItem" }
    }

    render() {

        this.$el.html(ListItemTemp(this.model.toJSON()));
        return this;
    }


    deleteItem () {

        this.model.destroy();

        this.remove();
    }

}
