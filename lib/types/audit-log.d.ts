import type { RawAutoModerationRule } from "./auto-moderation";
import type { RawAnnouncementThreadChannel, RawPrivateThreadChannel, RawPublicThreadChannel } from "./channels";
import type { RawIntegration } from "./guilds";
import type { RawScheduledEvent } from "./scheduled-events";
import type { RawUser } from "./users";
import type { RawWebhook } from "./webhooks";
import type { AuditLogActionTypes } from "../Constants";
import type ScheduledEvent from "../structures/ScheduledEvent";
import type AnnouncementThreadChannel from "../structures/AnnouncementThreadChannel";
import type PublicThreadChannel from "../structures/PublicThreadChannel";
import type PrivateThreadChannel from "../structures/PrivateThreadChannel";
import type User from "../structures/User";
import type Webhook from "../structures/Webhook";
import type Integration from "../structures/Integration";
import type AutoModerationRule from "../structures/AutoModerationRule";
import type AuditLogEntry from "../structures/AuditLogEntry";

export interface RawAuditLog {
    audit_log_entries: Array<RawAuditLogEntry>;
    auto_moderation_rules: Array<RawAutoModerationRule>;
    guild_scheduled_events: Array<RawScheduledEvent>;
    integrations: Array<RawIntegration>;
    threads: Array<RawAnnouncementThreadChannel | RawPublicThreadChannel | RawPrivateThreadChannel>;
    users: Array<RawUser>;
    webhooks: Array<RawWebhook>;
}

export interface AuditLog {
    autoModerationRules: Array<AutoModerationRule>;
    entries: Array<AuditLogEntry>;
    guildScheduledEvents: Array<ScheduledEvent>;
    integrations: Array<Integration>;
    threads: Array<AnnouncementThreadChannel | PublicThreadChannel | PrivateThreadChannel>;
    users: Array<User>;
    webhooks: Array<Webhook>;
}

export interface RawAuditLogEntry {
    action_type: AuditLogActionTypes;
    /** See the [audit log documentation](https://discord.com/developers/docs/resources/audit-log#audit-log-change-object) for more information. */
    changes?: Array<StandardAuditLogChange | RoleAuditLogChange>;
    id: string;
    options?: RawAuditLogEntryOptions;
    reason?: string;
    target_id: string | null;
    user_id: string | null;
}
export interface RawAuditLogEntryOptions {
    application_id?: string;
    channel_id?: string;
    count?: number;
    delete_member_days?: number;
    id?: string;
    members_removed?: number;
    message_id?: string;
    role_name?: string;
    type?: "0" | "1";
}
export interface AuditLogEntryOptions {
    /** ID of the app whose permissions were targeted - valid for: `APPLICATION_COMMAND_PERMISSION_UPDATE` */
    applicationID?: string;
    /** Channel in which the entities were targeted - valid for: `MEMBER_MOVE`,  `MESSAGE_PIN`, `MESSAGE_UNPIN`, `MESSAGE_DELETE`, `STAGE_INSTANCE_CREATE`, `STAGE_INSTANCE_UPDATE`, `STAGE_INSTANCE_DELETE` */
    channelID?: string;
    /** Number of entities that were targeted - valid for: `MESSAGE_DELETE`, `MESSAGE_BULK_DELETE`, `MEMBER_DISCONNECT`, `MEMBER_MOVE` */
    count?: number;
    /** Number of days after which inactive members were kicked - valid for: `MEMBER_PRUNE` */
    deleteMemberDays?: number;
    /** ID of the overwritten entity - valid for: `CHANNEL_OVERWRITE_CREATE`, `CHANNEL_OVERWRITE_UPDATE`, `CHANNEL_OVERWRITE_DELETE` */
    id?: string;
    /** Number of members removed by the prune - valid for: `MEMBER_PRUNE` */
    membersRemoved?: number;
    /** ID of the message that was targeted - valid for: `MESSAGE_PIN`, `MESSAGE_UNPIN` */
    messageID?: string;
    /** Name of the role if type is "0" (not present if type is "1") - valid for: `CHANNEL_OVERWRITE_CREATE`, `CHANNEL_OVERWRITE_UPDATE`, `CHANNEL_OVERWRITE_DELETE` */
    roleName?: string;
    /** Type of overwritten entity - role ("0") or member ("1") - valid for: `CHANNEL_OVERWRITE_CREATE`, `CHANNEL_OVERWRITE_UPDATE`, `CHANNEL_OVERWRITE_DELETE` */
    type?: "0" | "1";
}

export type RawAuditLogIntegration = Pick<RawIntegration, "id" | "name" | "type" | "account"> & { application_id?: string; };

export interface StandardAuditLogChange {
    key: string;
    new_value?: unknown;
    old_value?: unknown;
}

export interface RoleAuditLogChange {
    key: "$add" | "$remove";
    new_value: Array<{ id: string; name: string; }>;
}

export interface GetAuditLogOptions {
    actionType?: AuditLogActionTypes;
    before?: string;
    limit?: number;
    userID?: string;
}
