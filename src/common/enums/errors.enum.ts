export enum ErrorsEnum {
  //#region server
  request_processed_successfully = 'request_processed_successfully',
  internal_server_error = 'internal_server_error',
  unauthorized = 'unauthorized',
  forbidden = 'forbidden',
  swagger_file_not_found = 'swagger_file_not_found',
  errors_file_not_found = 'errors_file_not_found',
  //#endregion

  //#region order
  duplicate_order = 'duplicate_order',
  invalid_order_number = 'invalid_order_number',
  to_reorder_send_all_objects_together = 'to_reorder_send_all_objects_together',
  //#endregion

  //#region auth
  expire_code = 'expire_code',
  invalid_code = 'invalid_code',
  invalid_hash = 'invalid_hash',
  inactive_user_otp_sent = 'inactive_user_otp_sent',
  incorrect_password = 'incorrect_password',
  user_exists_sign_in = 'user_exists_sign_in',
  user_not_invited = 'user_not_invited',
  google_auth_missing_data = 'google_auth_missing_data',

  //#endregion

  //#region data and validation
  item_has_usage = 'item_has_usage',
  duplicate_item = 'duplicate_item',
  invalid_input = 'invalid_input',
  weak_password = 'weak_password',
  //#endregion

  //#region user
  user_not_active = 'user_not_active',
  cannot_update_verified_email = 'cannot_update_verified_email',
  cannot_update_verified_phone = 'cannot_update_verified_phone',
  user_not_found = 'user_not_found',
  //#endregion

  //#region file
  file_not_found = 'file_not_found',
  invalid_file_type = 'invalid_file_type',
  file_belongs_someone_else = 'file_belongs_someone_else',
  //#endregion

  //#region session
  session_not_found = 'session_not_found',
  //#endregion

  //#region email
  email_not_found = 'email_not_found',
  //#endregion

  //#region data source
  language_not_found = 'language_not_found',
  country_not_found = 'country_not_found',
  province_not_found = 'province_not_found',
  city_not_found = 'city_not_found',
  //#endregion

  //#region address
  address_not_found = 'address_not_found',
  //#endregion

  //#region products
  category_not_found = 'category_not_found',
  product_not_found = 'product_not_found',
  feature_not_found = 'feature_not_found',
  product_stock_is_not_enough = 'product_stock_is_not_enough',
  cannot_order_more_than_maximum = 'cannot_order_more_than_maximum',
  cannot_order_less_than_minimum = 'cannot_order_less_than_minimum',
  brand_not_found = 'brand_not_found',
  comment_not_found = 'comment_not_found',
  cannot_send_comment_without_purchase = 'cannot_send_comment_without_purchase',
  comment_feedback_not_found = 'comment_feedback_not_found',
  price_not_found = 'price_not_found',
  favorite_not_found = 'favorite_not_found',
  //#endregion

  //#region orders
  shipping_not_found = 'shipping_not_found',
  order_not_found = 'order_not_found',
  order_item_not_found = 'order_item_not_found',
  order_item_features_are_not_valid = 'order_item_features_are_not_valid',
  order_item_feature_values_are_not_valid = 'order_item_feature_values_are_not_valid',
  order_item_feature_duplicated = 'order_item_feature_duplicated',
  discount_amount_or_percent_required = 'discount_amount_or_percent_required',
  discount_not_found = 'discount_not_found',
  //#endregion

  //#region financials
  wallet_not_found = 'wallet_not_found',
  payment_not_found = 'payment_not_found',
  transaction_not_found = 'transaction_not_found',
  create_checkout_session_failed = 'create_checkout_session_failed',
  //#endregion

  //#region back office
  position_not_found = 'position_not_found',
  job_not_found = 'job_not_found',
  application_not_found = 'application_not_found',
  guideline_not_found = 'guideline_not_found',
  //#endregion
}
