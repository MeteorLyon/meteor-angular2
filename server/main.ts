import {Meteor} from 'meteor/meteor';
import {Parties} from '../collections/parties.ts';
import {loadParties} from './load-parties.ts';

Meteor.startup(loadParties);
