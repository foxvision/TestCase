import Backbone from 'backbone';

export default class ListItem extends Backbone.Model {
	constructor (options) {
		super(options);
		this.defaults = {
			name: 'Vasya'
		}
	}
}