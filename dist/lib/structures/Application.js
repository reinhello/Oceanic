"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Team_1 = __importDefault(require("./Team"));
const ClientApplication_1 = __importDefault(require("./ClientApplication"));
const Routes = __importStar(require("../util/Routes"));
/** Represents an oauth application. */
class Application extends ClientApplication_1.default {
    /** When false, only the application's owners can invite the bot to guilds. */
    botPublic;
    /** When true, the applications bot will only join upon the completion of the full oauth2 code grant flow. */
    botRequireCodeGrant;
    /** This application's rich presence invite cover image hash, if any. */
    coverImage;
    /** This application's default custom authorization link, if any. */
    customInstallURL;
    /** The description of the application. */
    description;
    /** If this application is a game sold on Discord, the guild to which it has been linked.*/
    guild;
    /** The ID of the guild associated with this application, if any. */
    guildID;
    /** The icon hash of the application. */
    icon;
    /** Settings for this application's in-app authorization link, if enabled. */
    installParams;
    /** The name of the application. */
    name;
    /** The owner of this application. */
    owner;
    /** If this application is a game sold on Discord, the id of the Game's SKU. */
    primarySKUID;
    /** A url to this application's privacy policy. */
    privacyPolicyURL;
    /** A list of rpc origin urls, if rpc is enabled. */
    rpcOrigins;
    /** If this application is a game sold on Discord, the slug that links to its store page. */
    slug;
    /** The tags for this application. */
    tags;
    /** The team that owns this application, if any. */
    team;
    /** A url to this application's terms of service. */
    termsOfServiceURL;
    /** The bot's hex encoded public key. */
    verifyKey;
    constructor(data, client) {
        super(data, client);
        this.botPublic = !!data.bot_public;
        this.botRequireCodeGrant = !!data.bot_require_code_grant;
        this.coverImage = null;
        this.description = data.description;
        this.icon = null;
        this.name = data.name;
        this.owner = client.users.update(data.owner);
        this.rpcOrigins = [];
        this.team = null;
        this.verifyKey = data.verify_key;
        this.update(data);
    }
    update(data) {
        super.update(data);
        if (data.bot_public !== undefined)
            this.botPublic = data.bot_public;
        if (data.bot_require_code_grant !== undefined)
            this.botRequireCodeGrant = data.bot_require_code_grant;
        if (data.cover_image !== undefined)
            this.coverImage = data.cover_image;
        if (data.custom_install_url !== undefined)
            this.customInstallURL = data.custom_install_url;
        if (data.description !== undefined)
            this.description = data.description;
        if (data.guild_id !== undefined) {
            this.guild = this.client.guilds.get(data.guild_id);
            this.guildID = data.guild_id;
        }
        if (data.icon !== undefined)
            this.icon = data.icon;
        if (data.install_params !== undefined)
            this.installParams = data.install_params;
        if (data.name !== undefined)
            this.name = data.name;
        if (data.owner !== undefined)
            this.owner = this.client.users.update(data.owner);
        if (data.primary_sku_id !== undefined)
            this.primarySKUID = data.primary_sku_id;
        if (data.privacy_policy_url !== undefined)
            this.privacyPolicyURL = data.privacy_policy_url;
        if (data.rpc_origins !== undefined)
            this.rpcOrigins = data.rpc_origins;
        if (data.slug !== undefined)
            this.slug = data.slug;
        if (data.tags !== undefined)
            this.tags = data.tags;
        if (data.team !== undefined)
            this.team = data.team ? new Team_1.default(data.team, this.client) : null;
        if (data.terms_of_service_url !== undefined)
            this.termsOfServiceURL = data.terms_of_service_url;
        if (data.verify_key !== undefined)
            this.verifyKey = data.verify_key;
    }
    /**
     * The url of this application's cover image.
     * @param format The format the url should be.
     * @param size The dimensions of the image.
     */
    coverImageURL(format, size) {
        return this.coverImage === null ? null : this.client.util.formatImage(Routes.APPLICATION_COVER(this.id, this.coverImage), format, size);
    }
    toJSON() {
        return {
            ...super.toJSON(),
            botPublic: this.botPublic,
            botRequireCodeGrant: this.botRequireCodeGrant,
            coverImage: this.coverImage,
            customInstallURL: this.customInstallURL,
            description: this.description,
            guild: this.guild?.id,
            icon: this.icon,
            installParams: this.installParams,
            name: this.name,
            owner: this.owner.id,
            primarySKUID: this.primarySKUID,
            privacyPolicyURL: this.privacyPolicyURL,
            rpcOrigins: this.rpcOrigins,
            slug: this.slug,
            tags: this.tags,
            team: this.team?.toJSON() || null,
            termsOfServiceURL: this.termsOfServiceURL,
            verifyKey: this.verifyKey
        };
    }
}
exports.default = Application;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwbGljYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvc3RydWN0dXJlcy9BcHBsaWNhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esa0RBQTBCO0FBQzFCLDRFQUFvRDtBQUtwRCx1REFBeUM7QUFHekMsdUNBQXVDO0FBQ3ZDLE1BQXFCLFdBQVksU0FBUSwyQkFBaUI7SUFDdEQsOEVBQThFO0lBQzlFLFNBQVMsQ0FBVTtJQUNuQiw2R0FBNkc7SUFDN0csbUJBQW1CLENBQVU7SUFDN0Isd0VBQXdFO0lBQ3hFLFVBQVUsQ0FBZ0I7SUFDMUIsb0VBQW9FO0lBQ3BFLGdCQUFnQixDQUFVO0lBQzFCLDBDQUEwQztJQUMxQyxXQUFXLENBQVM7SUFDcEIsMkZBQTJGO0lBQzNGLEtBQUssQ0FBUztJQUNkLG9FQUFvRTtJQUNwRSxPQUFPLENBQVU7SUFDakIsd0NBQXdDO0lBQ3hDLElBQUksQ0FBZ0I7SUFDcEIsNkVBQTZFO0lBQzdFLGFBQWEsQ0FBaUI7SUFDOUIsbUNBQW1DO0lBQ25DLElBQUksQ0FBUztJQUNiLHFDQUFxQztJQUNyQyxLQUFLLENBQU87SUFDWiwrRUFBK0U7SUFDL0UsWUFBWSxDQUFVO0lBQ3RCLGtEQUFrRDtJQUNsRCxnQkFBZ0IsQ0FBVTtJQUMxQixvREFBb0Q7SUFDcEQsVUFBVSxDQUFnQjtJQUMxQiw0RkFBNEY7SUFDNUYsSUFBSSxDQUFVO0lBQ2QscUNBQXFDO0lBQ3JDLElBQUksQ0FBaUI7SUFDckIsbURBQW1EO0lBQ25ELElBQUksQ0FBYztJQUNsQixvREFBb0Q7SUFDcEQsaUJBQWlCLENBQVU7SUFDM0Isd0NBQXdDO0lBQ3hDLFNBQVMsQ0FBUztJQUNsQixZQUFZLElBQXFCLEVBQUUsTUFBYztRQUM3QyxLQUFLLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDbkMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUM7UUFDekQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRVMsTUFBTSxDQUFDLElBQThCO1FBQzNDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkIsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLFNBQVM7WUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDcEUsSUFBSSxJQUFJLENBQUMsc0JBQXNCLEtBQUssU0FBUztZQUFFLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUM7UUFDdEcsSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLFNBQVM7WUFBRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDdkUsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEtBQUssU0FBUztZQUFFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUM7UUFDM0YsSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLFNBQVM7WUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDeEUsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLFNBQVMsRUFBRTtZQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDbkQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQ2hDO1FBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVM7WUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDbkQsSUFBSSxJQUFJLENBQUMsY0FBYyxLQUFLLFNBQVM7WUFBRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDaEYsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVM7WUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDbkQsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVM7WUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEYsSUFBSSxJQUFJLENBQUMsY0FBYyxLQUFLLFNBQVM7WUFBRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDL0UsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEtBQUssU0FBUztZQUFFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUM7UUFDM0YsSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLFNBQVM7WUFBRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDdkUsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVM7WUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDbkQsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVM7WUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDbkQsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVM7WUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksY0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDN0YsSUFBSSxJQUFJLENBQUMsb0JBQW9CLEtBQUssU0FBUztZQUFFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUM7UUFDaEcsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLFNBQVM7WUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDeEUsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxhQUFhLENBQUMsTUFBb0IsRUFBRSxJQUFhO1FBQzdDLE9BQU8sSUFBSSxDQUFDLFVBQVUsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUksQ0FBQztJQUVRLE1BQU07UUFDWCxPQUFPO1lBQ0gsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ2pCLFNBQVMsRUFBWSxJQUFJLENBQUMsU0FBUztZQUNuQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsbUJBQW1CO1lBQzdDLFVBQVUsRUFBVyxJQUFJLENBQUMsVUFBVTtZQUNwQyxnQkFBZ0IsRUFBSyxJQUFJLENBQUMsZ0JBQWdCO1lBQzFDLFdBQVcsRUFBVSxJQUFJLENBQUMsV0FBVztZQUNyQyxLQUFLLEVBQWdCLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUNuQyxJQUFJLEVBQWlCLElBQUksQ0FBQyxJQUFJO1lBQzlCLGFBQWEsRUFBUSxJQUFJLENBQUMsYUFBYTtZQUN2QyxJQUFJLEVBQWlCLElBQUksQ0FBQyxJQUFJO1lBQzlCLEtBQUssRUFBZ0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2xDLFlBQVksRUFBUyxJQUFJLENBQUMsWUFBWTtZQUN0QyxnQkFBZ0IsRUFBSyxJQUFJLENBQUMsZ0JBQWdCO1lBQzFDLFVBQVUsRUFBVyxJQUFJLENBQUMsVUFBVTtZQUNwQyxJQUFJLEVBQWlCLElBQUksQ0FBQyxJQUFJO1lBQzlCLElBQUksRUFBaUIsSUFBSSxDQUFDLElBQUk7WUFDOUIsSUFBSSxFQUFpQixJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLElBQUk7WUFDaEQsaUJBQWlCLEVBQUksSUFBSSxDQUFDLGlCQUFpQjtZQUMzQyxTQUFTLEVBQVksSUFBSSxDQUFDLFNBQVM7U0FDdEMsQ0FBQztJQUNOLENBQUM7Q0FDSjtBQS9HRCw4QkErR0MifQ==