/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import {
	Actor,
	ButtonBehavior,
	Collider,
	ColliderGeometry,
	CollisionLayer,
	Context,
	DegreesToRadians,
	Quaternion,
	TextAnchorLocation,
	User,
	Vector3
} from '@microsoft/mixed-reality-extension-sdk';
import * as MRE from '@microsoft/mixed-reality-extension-sdk';
import * as MRESDK from '@microsoft/mixed-reality-extension-sdk';

export default class HelloWorld {
	public expectedResultDescription = "Different grabbable items.";

	constructor(private context: Context, private baseUrl: string) {
		this.context.onUserJoined((user) => this.userJoined(user));
	}

	// Create list to keep track of items attached to users.
	private attachedItems: {[id: string]: Actor} = {};

    private userJoined(user: User) {

                   // Code to run when a user joins.
                   console.log(`User joined: ${user.name}`);
                   console.log(user);
                   if (user.name === "Chris (Coolph3r#4928)"){
                       Actor.CreateFromLibrary(this.context, {
                        resourceId: "artifact: 1501634885482185051",
                        actor: {
                            name: 'bowtie',
                            attachment: {
                                userId: user.id,
                                attachPoint: 'neck'
                            },
                            transform: {local: {
                                position: { x: -0.02, y: -0.01, z: 0.13 },
                                scale: { x: 0.131844, y: 0.131844, z: 0.131844},
                               
                            }}
                        }
                    });
    }
}
}