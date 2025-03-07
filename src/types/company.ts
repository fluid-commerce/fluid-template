import { z } from "zod";
import { clubSchema } from "./club";
import { countrySchema } from "./country";
import { languageSchema } from "./language";

const companySchema = z.object({
  id: z.number(),
  name: z.string(),
  logo_url: z.string().nullable(),
  active: z.boolean(),
  subdomain: z.string(),
  color: z.string(),
  count_giveaway_points_in_fantasy: z.boolean(),
  fantasy_enroll_points: z.number(),
  fantasy_training_points: z.number().optional(),
  fantasy_upload_points: z.number(),
  fantasy_new_contact_points: z.number(),
  fantasy_share_views_points: z.number(),
  fantasy_direct_share_points: z.number(),
  fantasy_order_points: z.number(),
  fantasy_email_points: z.number(),
  fantasy_call_points: z.number(),
  giveaway_child_points: z.number(),
  display_contacts: z.boolean(),
  display_share: z.boolean(),
  giveaway_descendant_points: z.number(),
  giveaway_grandchild_points: z.number(),
  giveaway_join_points: z.number(),
  display_callpro: z.boolean(),
  display_media: z.boolean(),
  display_comments: z.boolean(),
  promo_video_url: z.string().nullable(),
  display_fantasy: z.boolean(),
  display_giveaways: z.boolean().optional(),
  display_orders: z.boolean(),
  display_leads: z.boolean(),
  display_courses: z.boolean(),
  display_uploads: z.boolean(),
  display_products: z.boolean(),
  display_badges: z.boolean(),
  display_webchat: z.boolean(),
  languages: z.array(languageSchema),
  countries: z.array(countrySchema),
  clubs: z.array(clubSchema),
  privacy_url: z.string(),
  terms_url: z.string(),
  base_url: z.string(),
  display_mysite: z.boolean(),
  shop_id: z.string().nullable(),
  agree_to_terms: z.string().nullable(),
  display_shop: z.boolean(),
  public: z.boolean(),
  enable_premium_messaging: z.boolean(),
  fluid_commission: z.number(),
  company_commission: z.number(),
  show_commission_as_cv: z.boolean(),
  cv_to_usd_ratio: z.number(),
  auto_add_new_products: z.boolean(),
  default_product_commission: z.number(),
  reviews_on_orders: z.boolean(),
  display_announcements: z.boolean(),
  display_tiles: z.boolean(),
  display_points: z.boolean(),
  display_messaging: z.boolean(),
  display_events: z.boolean(),
  display_tasks: z.boolean(),
  display_contact_activity: z.boolean(),
  display_activities: z.boolean(),
  display_analytics: z.boolean(),
  display_leaderboard: z.boolean(),
  display_discounts: z.boolean(),
  display_share_stats: z.boolean(),
  display_get_started: z.boolean(),
  display_explore: z.boolean(),
  display_playlists: z.boolean(),
  display_pages: z.boolean(),
  display_promos: z.boolean(),
  display_enrollments: z.boolean(),
  display_channel_messaging: z.boolean(),
  display_direct_messaging: z.boolean(),
  display_recent_activity: z.boolean(),
  display_group_messaging: z.boolean(),
  display_contact_groups: z.boolean(),
  display_contact_csv_import: z.boolean(),
  display_contact_csv_export: z.boolean(),
  display_member_shopping: z.boolean(),
  display_marketplace: z.boolean(),
  display_wallet: z.boolean(),
  invite_customers_to_download: z.boolean().nullable(),
  shop_onboarded_at: z.string().nullable(),
  default_country: countrySchema,
  display_fluid_trainings: z.boolean(),
  feature_flags: z.any(),
  settings: z.any(),
  hide_reviews_rating: z.boolean(),
  appstore_url: z.string().nullable(),
  playstore_url: z.string().nullable(),
  token: z.string(),
  display_billing_zip: z.boolean().nullable(),
});

export type Company = z.infer<typeof companySchema>;
export { companySchema };
