import Backbone from 'backbone';

import $ from 'jquery';

import _ from 'underscore';

import ListItemView from './listItem.js'

import ListItemsCollect from '../collections/listItems.js'

export default class MainView extends Backbone.View {


    get el() {
        return $('#list')
    }

    initialize() {

        this.collection = new ListItemsCollect([
            { name: "Contact 1", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "family" },
            { name: "Contact 2", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "family" },
            { name: "Contact 3", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "friend" },
            { name: "Contact 4", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "colleague" },
            { name: "Contact 5", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "family" },
            { name: "Contact 6", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "colleague" },
            { name: "Contact 7", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "friend" },
            { name: "Contact 8", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "family" }
        ]);

        this.render();
    }

    render() {

        _.each(this.collection.models, item => {

            var listItemView = new ListItemView({
                model: item
            });

            this.$el.append(listItemView.render().el);

            console.log(listItemView.render().el);

        }, this);
    };



}
