/**
 * Parse profile.
 *
 * @param {Object|String} json
 * @return {Object}
 * @api private
 */
exports.parse = function(json) {
	if ('string' == typeof json) {
		json = JSON.parse(json);
	}

	var profile = {};
	profile.id = String(json.id);
	profile.displayName = json.first_name + ' ' + json.last_name;
	profile.username = json.username;
	profile.name = {
		givenName: json.first_name,
		familyName: json.last_name
	};
	profile.role = json.type;
	if (json.email) {
		profile.emails = [{ value: json.email }];
	}
	if (json.avatars) {
		profile.photos = [];
		if (json.avatars.small) {
			profile.photos.push({ value: json.avatars.small, type: 'small' });
		}
		if (json.avatars.large) {
			profile.photos.push({ value: json.avatars.large, type: 'large' });
		}
	}

	return profile;
};
