import React from "react";

function Checkout() {
  return (
    <div>
      <div
        data-elementor-type="wp-page"
        data-elementor-id="659"
        class="elementor elementor-659"
        data-elementor-post-type="page"
      >
        <section
          class="elementor-section elementor-top-section elementor-element elementor-element-6886d232 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
          data-id="6886d232"
          data-element_type="section"
          data-settings='{"jet_parallax_layout_list":[]}'
         />
        <div class="elementor-container elementor-column-gap-no" >
          <div
            class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-5d815032"
            data-id="5d815032"
            data-element_type="column"
          >
            <div class="elementor-widget-wrap elementor-element-populated">
              <div
                class="elementor-element elementor-element-37fbb1df e-checkout-layout-two-column elementor-widget elementor-widget-woocommerce-checkout-page"
                data-id="37fbb1df"
                data-element_type="widget"
                data-settings='{"sticky_right_column":"yes"}'
                data-widget_type="woocommerce-checkout-page.default"
              >
                <div class="elementor-widget-container">
                  <div class="woocommerce">
                    <div class="woocommerce-notices-wrapper"></div>
                    <div class="woocommerce-notices-wrapper"></div>
                    <form
                      name="checkout"
                      method="post"
                      class="checkout woocommerce-checkout"
                      action="https://babysonbroadway.com/checkout-2/"
                      enctype="multipart/form-data"
                    />
                    <div class="e-checkout__container">
                      <div class="e-checkout__column e-checkout__column-start">
                        <div class="col2-set" id="customer_details">
                          <div class="col-1">
                            <div class="woocommerce-billing-fields">
                              <h3>Billing Details</h3>
                              <div class="woocommerce-billing-fields__field-wrapper">
                                <p
                                  class="form-row form-row-first validate-required"
                                  id="billing_first_name_field"
                                  data-priority="10"
                                >
                                  <label for="billing_first_name" class="">
                                    First Name &nbsp;
                                    <abbr class="required" title="required">
                                      *
                                    </abbr>
                                  </label>
                                  <span class="woocommerce-input-wrapper">
                                    <input
                                      type="text"
                                      class="input-text "
                                      name="billing_first_name"
                                      id="billing_first_name"
                                      placeholder="First Name"
                                      value=""
                                      autocomplete="given-name"
                                    />
                                  </span>
                                </p>
                                <p
                                  class="form-row form-row-last validate-required"
                                  id="billing_last_name_field"
                                  data-priority="20"
                                >
                                  <label for="billing_last_name" class="">
                                    Last Name &nbsp;
                                    <abbr class="required" title="required">
                                      *
                                    </abbr>
                                  </label>
                                  <span class="woocommerce-input-wrapper">
                                    <input
                                      type="text"
                                      class="input-text "
                                      name="billing_last_name"
                                      id="billing_last_name"
                                      placeholder="Last Name"
                                      value=""
                                      autocomplete="family-name"
                                    />
                                  </span>
                                </p>
                                <p
                                  class="form-row form-row-wide"
                                  id="billing_company_field"
                                  data-priority="30"
                                >
                                  <label for="billing_company" class="">
                                    Company Name &nbsp;
                                    <span class="optional">(optional)</span>
                                  </label>
                                  <span class="woocommerce-input-wrapper">
                                    <input
                                      type="text"
                                      class="input-text "
                                      name="billing_company"
                                      id="billing_company"
                                      placeholder="Company Name"
                                      value=""
                                      autocomplete="organization"
                                    />
                                  </span>
                                </p>
                                <p
                                  class="form-row form-row-wide address-field update_totals_on_change validate-required"
                                  id="billing_country_field"
                                  data-priority="40"
                                >
                                  <label for="billing_country" class="">
                                    Country / Region &nbsp;
                                    <abbr class="required" title="required">
                                      *
                                    </abbr>
                                  </label>
                                  <span class="woocommerce-input-wrapper">
                                    <strong>United States (US)</strong>
                                    <input
                                      type="hidden"
                                      name="billing_country"
                                      id="billing_country"
                                      value="US"
                                      autocomplete="country"
                                      class="country_to_state"
                                      readonly="readonly"
                                    />
                                  </span>
                                </p>
                                <p
                                  class="form-row form-row-wide address-field validate-required"
                                  id="billing_address_1_field"
                                  data-priority="50"
                                >
                                  <label for="billing_address_1" class="">
                                    Street address &nbsp;
                                    <abbr class="required" title="required">
                                      *
                                    </abbr>
                                  </label>
                                  <span class="woocommerce-input-wrapper">
                                    <input
                                      type="text"
                                      class="input-text "
                                      name="billing_address_1"
                                      id="billing_address_1"
                                      placeholder="House number and street name"
                                      value=""
                                      autocomplete="address-line1"
                                    />
                                  </span>
                                </p>
                                <p
                                  class="form-row form-row-wide address-field"
                                  id="billing_address_2_field"
                                  data-priority="60"
                                >
                                  <label
                                    for="billing_address_2"
                                    class="screen-reader-text"
                                  >
                                    Apartment, suite, unit, etc.&nbsp;
                                    <span class="optional">(optional)</span>
                                  </label>
                                  <span class="woocommerce-input-wrapper">
                                    <input
                                      type="text"
                                      class="input-text "
                                      name="billing_address_2"
                                      id="billing_address_2"
                                      placeholder="Apartment, suite, unit, etc. (optional)"
                                      value=""
                                      autocomplete="address-line2"
                                    />
                                  </span>
                                </p>
                                <p
                                  class="form-row form-row-wide address-field validate-required"
                                  id="billing_city_field"
                                  data-priority="70"
                                >
                                  <label for="billing_city" class="">
                                    Town / City &nbsp;
                                    <abbr class="required" title="required">
                                      *
                                    </abbr>
                                  </label>
                                  <span class="woocommerce-input-wrapper">
                                    <input
                                      type="text"
                                      class="input-text "
                                      name="billing_city"
                                      id="billing_city"
                                      placeholder=""
                                      value=""
                                      autocomplete="address-level2"
                                    />
                                  </span>
                                </p>
                                <p
                                  class="form-row form-row-wide address-field validate-required validate-state"
                                  id="billing_state_field"
                                  data-priority="80"
                                >
                                  <label for="billing_state" class="">
                                    State &nbsp;
                                    <abbr class="required" title="required">
                                      *
                                    </abbr>
                                  </label>
                                  <span class="woocommerce-input-wrapper">
                                    <select
                                      name="billing_state"
                                      id="billing_state"
                                      class="state_select "
                                      autocomplete="address-level1"
                                      data-placeholder="Select an option&hellip;"
                                      data-input-classes=""
                                      data-label="State"
                                    >
                                      <option value="">
                                        Select an option &hellip;
                                      </option>
                                      <option value="AL">Alabama</option>
                                      <option value="AK">Alaska</option>
                                      <option value="AZ">Arizona</option>
                                      <option value="AR">Arkansas</option>
                                      <option value="CA">California</option>
                                      <option value="CO">Colorado</option>
                                      <option value="CT">Connecticut</option>
                                      <option value="DE">Delaware</option>
                                      <option value="DC">
                                        District Of Columbia
                                      </option>
                                      <option value="FL">Florida</option>
                                      <option value="GA">Georgia</option>
                                      <option value="HI">Hawaii</option>
                                      <option value="ID">Idaho</option>
                                      <option value="IL">Illinois</option>
                                      <option value="IN">Indiana</option>
                                      <option value="IA">Iowa</option>
                                      <option value="KS">Kansas</option>
                                      <option value="KY">Kentucky</option>
                                      <option value="LA">Louisiana</option>
                                      <option value="ME">Maine</option>
                                      <option value="MD">Maryland</option>
                                      <option value="MA">Massachusetts</option>
                                      <option value="MI">Michigan</option>
                                      <option value="MN">Minnesota</option>
                                      <option value="MS">Mississippi</option>
                                      <option value="MO">Missouri</option>
                                      <option value="MT">Montana</option>
                                      <option value="NE">Nebraska</option>
                                      <option value="NV">Nevada</option>
                                      <option value="NH">New Hampshire</option>
                                      <option value="NJ">New Jersey</option>
                                      <option value="NM">New Mexico</option>
                                      <option value="NY">New York</option>
                                      <option value="NC">North Carolina</option>
                                      <option value="ND">North Dakota</option>
                                      <option value="OH">Ohio</option>
                                      <option value="OK">Oklahoma</option>
                                      <option value="OR">Oregon</option>
                                      <option value="PA">Pennsylvania</option>
                                      <option value="RI">Rhode Island</option>
                                      <option value="SC">South Carolina</option>
                                      <option value="SD">South Dakota</option>
                                      <option value="TN">Tennessee</option>
                                      <option value="TX">Texas</option>
                                      <option value="UT">Utah</option>
                                      <option value="VT">Vermont</option>
                                      <option value="VA">Virginia</option>
                                      <option value="WA">Washington</option>
                                      <option value="WV">West Virginia</option>
                                      <option value="WI">Wisconsin</option>
                                      <option value="WY">Wyoming</option>
                                      <option value="AA">
                                        Armed Forces (AA)
                                      </option>
                                      <option value="AE">
                                        Armed Forces (AE)
                                      </option>
                                      <option value="AP">
                                        Armed Forces (AP)
                                      </option>
                                    </select>
                                  </span>
                                </p>
                                <p
                                  class="form-row form-row-wide address-field validate-required validate-postcode"
                                  id="billing_postcode_field"
                                  data-priority="90"
                                >
                                  <label for="billing_postcode" class="">
                                    ZIP Code &nbsp;
                                    <abbr class="required" title="required">
                                      *
                                    </abbr>
                                  </label>
                                  <span class="woocommerce-input-wrapper">
                                    <input
                                      type="text"
                                      class="input-text "
                                      name="billing_postcode"
                                      id="billing_postcode"
                                      placeholder=""
                                      value=""
                                      autocomplete="postal-code"
                                    />
                                  </span>
                                </p>
                                <p
                                  class="form-row form-row-wide validate-required validate-phone"
                                  id="billing_phone_field"
                                  data-priority="100"
                                >
                                  <label for="billing_phone" class="">
                                    Phone &nbsp;
                                    <abbr class="required" title="required">
                                      *
                                    </abbr>
                                  </label>
                                  <span class="woocommerce-input-wrapper">
                                    <input
                                      type="tel"
                                      class="input-text "
                                      name="billing_phone"
                                      id="billing_phone"
                                      placeholder="Phone"
                                      value=""
                                      autocomplete="tel"
                                    />
                                  </span>
                                </p>
                                <p
                                  class="form-row form-row-wide validate-required validate-email"
                                  id="billing_email_field"
                                  data-priority="110"
                                >
                                  <label for="billing_email" class="">
                                    Email Address &nbsp;
                                    <abbr class="required" title="required">
                                      *
                                    </abbr>
                                  </label>
                                  <span class="woocommerce-input-wrapper">
                                    <input
                                      type="email"
                                      class="input-text "
                                      name="billing_email"
                                      id="billing_email"
                                      placeholder="Email Address"
                                      value=""
                                      autocomplete="email username"
                                    />
                                  </span>
                                </p>
                              </div>
                            </div>
                            <div class="woocommerce-account-fields">
                              <p class="form-row form-row-wide create-account">
                                <label class="woocommerce-form__label woocommerce-form__label-for-checkbox checkbox">
                                  <input
                                    class="woocommerce-form__input woocommerce-form__input-checkbox input-checkbox"
                                    id="createaccount"
                                    checked="checked"
                                    type="checkbox"
                                    name="createaccount"
                                    value="1"
                                  />
                                  <span>Create an account?</span>
                                </label>
                              </p>
                            </div>
                          </div>
                          <div class="col-2">
                            <div class="woocommerce-shipping-fields">
                              <h3 id="ship-to-different-address">
                                <label class="woocommerce-form__label woocommerce-form__label-for-checkbox checkbox">
                                  <input
                                    id="ship-to-different-address-checkbox"
                                    class="woocommerce-form__input woocommerce-form__input-checkbox input-checkbox"
                                    checked="checked"
                                    type="checkbox"
                                    name="ship_to_different_address"
                                    value="1"
                                  />
                                  <span>Ship to a different address?</span>
                                </label>
                              </h3>
                              <div class="shipping_address">
                                <div class="woocommerce-shipping-fields__field-wrapper">
                                  <p
                                    class="form-row form-row-first validate-required"
                                    id="shipping_first_name_field"
                                    data-priority="10"
                                  >
                                    <label for="shipping_first_name" class="">
                                      First Name &nbsp;
                                      <abbr class="required" title="required">
                                        *
                                      </abbr>
                                    </label>
                                    <span class="woocommerce-input-wrapper">
                                      <input
                                        type="text"
                                        class="input-text "
                                        name="shipping_first_name"
                                        id="shipping_first_name"
                                        placeholder="First Name"
                                        value=""
                                        autocomplete="given-name"
                                      />
                                    </span>
                                  </p>
                                  <p
                                    class="form-row form-row-last validate-required"
                                    id="shipping_last_name_field"
                                    data-priority="20"
                                  >
                                    <label for="shipping_last_name" class="">
                                      Last Name &nbsp;
                                      <abbr class="required" title="required">
                                        *
                                      </abbr>
                                    </label>
                                    <span class="woocommerce-input-wrapper">
                                      <input
                                        type="text"
                                        class="input-text "
                                        name="shipping_last_name"
                                        id="shipping_last_name"
                                        placeholder="Last Name"
                                        value=""
                                        autocomplete="family-name"
                                      />
                                    </span>
                                  </p>
                                  <p
                                    class="form-row form-row-wide"
                                    id="shipping_company_field"
                                    data-priority="30"
                                  >
                                    <label for="shipping_company" class="">
                                      Company Name &nbsp;
                                      <span class="optional">(optional)</span>
                                    </label>
                                    <span class="woocommerce-input-wrapper">
                                      <input
                                        type="text"
                                        class="input-text "
                                        name="shipping_company"
                                        id="shipping_company"
                                        placeholder="Company Name"
                                        value=""
                                        autocomplete="organization"
                                      />
                                    </span>
                                  </p>
                                  <p
                                    class="form-row form-row-wide address-field update_totals_on_change validate-required"
                                    id="shipping_country_field"
                                    data-priority="40"
                                  >
                                    <label for="shipping_country" class="">
                                      Country / Region &nbsp;
                                      <abbr class="required" title="required">
                                        *
                                      </abbr>
                                    </label>
                                    <span class="woocommerce-input-wrapper">
                                      <strong>United States (US)</strong>
                                      <input
                                        type="hidden"
                                        name="shipping_country"
                                        id="shipping_country"
                                        value="US"
                                        autocomplete="country"
                                        class="country_to_state"
                                        readonly="readonly"
                                      />
                                    </span>
                                  </p>
                                  <p
                                    class="form-row form-row-wide address-field validate-required"
                                    id="shipping_address_1_field"
                                    data-priority="50"
                                  >
                                    <label for="shipping_address_1" class="">
                                      Street address &nbsp;
                                      <abbr class="required" title="required">
                                        *
                                      </abbr>
                                    </label>
                                    <span class="woocommerce-input-wrapper">
                                      <input
                                        type="text"
                                        class="input-text "
                                        name="shipping_address_1"
                                        id="shipping_address_1"
                                        placeholder="House number and street name"
                                        value=""
                                        autocomplete="address-line1"
                                      />
                                    </span>
                                  </p>
                                  <p
                                    class="form-row form-row-wide address-field"
                                    id="shipping_address_2_field"
                                    data-priority="60"
                                  >
                                    <label
                                      for="shipping_address_2"
                                      class="screen-reader-text"
                                    >
                                      Apartment, suite, unit, etc.&nbsp;
                                      <span class="optional">(optional)</span>
                                    </label>
                                    <span class="woocommerce-input-wrapper">
                                      <input
                                        type="text"
                                        class="input-text "
                                        name="shipping_address_2"
                                        id="shipping_address_2"
                                        placeholder="Apartment, suite, unit, etc. (optional)"
                                        value=""
                                        autocomplete="address-line2"
                                      />
                                    </span>
                                  </p>
                                  <p
                                    class="form-row form-row-wide address-field validate-required"
                                    id="shipping_city_field"
                                    data-priority="70"
                                  >
                                    <label for="shipping_city" class="">
                                      Town / City &nbsp;
                                      <abbr class="required" title="required">
                                        *
                                      </abbr>
                                    </label>
                                    <span class="woocommerce-input-wrapper">
                                      <input
                                        type="text"
                                        class="input-text "
                                        name="shipping_city"
                                        id="shipping_city"
                                        placeholder=""
                                        value=""
                                        autocomplete="address-level2"
                                      />
                                    </span>
                                  </p>
                                  <p
                                    class="form-row form-row-wide address-field validate-required validate-state"
                                    id="shipping_state_field"
                                    data-priority="80"
                                  >
                                    <label for="shipping_state" class="">
                                      State &nbsp;
                                      <abbr class="required" title="required">
                                        *
                                      </abbr>
                                    </label>
                                    <span class="woocommerce-input-wrapper">
                                      <select
                                        name="shipping_state"
                                        id="shipping_state"
                                        class="state_select "
                                        autocomplete="address-level1"
                                        data-placeholder="Select an option&hellip;"
                                        data-input-classes=""
                                        data-label="State"
                                      >
                                        <option value="">
                                          Select an option &hellip;
                                        </option>
                                        <option value="AL">Alabama</option>
                                        <option value="AK">Alaska</option>
                                        <option value="AZ">Arizona</option>
                                        <option value="AR">Arkansas</option>
                                        <option value="CA">California</option>
                                        <option value="CO">Colorado</option>
                                        <option value="CT">Connecticut</option>
                                        <option value="DE">Delaware</option>
                                        <option value="DC">
                                          District Of Columbia
                                        </option>
                                        <option value="FL">Florida</option>
                                        <option value="GA">Georgia</option>
                                        <option value="HI">Hawaii</option>
                                        <option value="ID">Idaho</option>
                                        <option value="IL">Illinois</option>
                                        <option value="IN">Indiana</option>
                                        <option value="IA">Iowa</option>
                                        <option value="KS">Kansas</option>
                                        <option value="KY">Kentucky</option>
                                        <option value="LA">Louisiana</option>
                                        <option value="ME">Maine</option>
                                        <option value="MD">Maryland</option>
                                        <option value="MA">
                                          Massachusetts
                                        </option>
                                        <option value="MI">Michigan</option>
                                        <option value="MN">Minnesota</option>
                                        <option value="MS">Mississippi</option>
                                        <option value="MO">Missouri</option>
                                        <option value="MT">Montana</option>
                                        <option value="NE">Nebraska</option>
                                        <option value="NV">Nevada</option>
                                        <option value="NH">
                                          New Hampshire
                                        </option>
                                        <option value="NJ">New Jersey</option>
                                        <option value="NM">New Mexico</option>
                                        <option value="NY">New York</option>
                                        <option value="NC">
                                          North Carolina
                                        </option>
                                        <option value="ND">North Dakota</option>
                                        <option value="OH">Ohio</option>
                                        <option value="OK">Oklahoma</option>
                                        <option value="OR">Oregon</option>
                                        <option value="PA">Pennsylvania</option>
                                        <option value="RI">Rhode Island</option>
                                        <option value="SC">
                                          South Carolina
                                        </option>
                                        <option value="SD">South Dakota</option>
                                        <option value="TN">Tennessee</option>
                                        <option value="TX">Texas</option>
                                        <option value="UT">Utah</option>
                                        <option value="VT">Vermont</option>
                                        <option value="VA">Virginia</option>
                                        <option value="WA">Washington</option>
                                        <option value="WV">
                                          West Virginia
                                        </option>
                                        <option value="WI">Wisconsin</option>
                                        <option value="WY">Wyoming</option>
                                        <option value="AA">
                                          Armed Forces (AA)
                                        </option>
                                        <option value="AE">
                                          Armed Forces (AE)
                                        </option>
                                        <option value="AP">
                                          Armed Forces (AP)
                                        </option>
                                      </select>
                                    </span>
                                  </p>
                                  <p
                                    class="form-row form-row-wide address-field validate-required validate-postcode"
                                    id="shipping_postcode_field"
                                    data-priority="90"
                                  >
                                    <label for="shipping_postcode" class="">
                                      ZIP Code &nbsp;
                                      <abbr class="required" title="required">
                                        *
                                      </abbr>
                                    </label>
                                    <span class="woocommerce-input-wrapper">
                                      <input
                                        type="text"
                                        class="input-text "
                                        name="shipping_postcode"
                                        id="shipping_postcode"
                                        placeholder=""
                                        value=""
                                        autocomplete="postal-code"
                                      />
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                  
                            <div class="woocommerce-additional-fields__field-wrapper">
                                <p
                                  class="form-row notes"
                                  id="order_comments_field"
                                  data-priority=""
                                >
                                  <label for="order_comments" class="">
                                    Order notes &nbsp;
                                    <span class="optional">(optional)</span>
                                  </label>
                                  <span class="woocommerce-input-wrapper">
                                    <textarea
                                      name="order_comments"
                                      class="input-text "
                                      id="order_comments"
                                      placeholder="Notes about your order, e.g. special notes for delivery."
                                      rows="2"
                                      cols="5"
                                    ></textarea>
                                  </span>
                                </p>
                              </div>
                            <div class="woocommerce-additional-fields">
                             
                            </div>
                          </div>
                        </div>
                        <wc-order-attribution-inputs></wc-order-attribution-inputs>
                      </div>
                      <div class="e-checkout__column e-checkout__column-end">
                        <div class="e-checkout__column-inner e-sticky-right-column">
                          <div class="e-checkout__order_review">
                            <h3 id="order_review_heading">Your Order</h3>
                            <div
                              id="order_review"
                              class="woocommerce-checkout-review-order"
                            >
                              <table class="shop_table woocommerce-checkout-review-order-table">
                                <thead>
                                  <tr>
                                    <th class="product-name">Product</th>
                                    <th class="product-total">Subtotal</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr class="cart_item">
                                    <td class="product-name">
                                      Mushie Silicone Cradle Cap Brush -
                                      Blush/Shifting Sand &nbsp;
                                      <strong class="product-quantity">
                                        &times;&nbsp;1
                                      </strong>
                                      <dl class="variation">
                                        <dt class="variation-PickUpType">
                                          Pick Up Type:
                                        </dt>
                                        <dd class="variation-PickUpType">
                                          <p>Delivery</p>
                                        </dd>
                                      </dl>
                                    </td>
                                    <td class="product-total">
                                      <span class="woocommerce-Price-amount amount">
                                        <bdi>
                                          <span class="woocommerce-Price-currencySymbol">
                                            &#36;
                                          </span>
                                          9.99
                                        </bdi>
                                      </span>
                                      <br />
                                      (9.99 points)
                                    </td>
                                  </tr>
                                </tbody>
                                <tfoot>
                                  <tr class="cart-subtotal">
                                    <th>Subtotal</th>
                                    <td>
                                      <span class="woocommerce-Price-amount amount">
                                        <bdi>
                                          <span class="woocommerce-Price-currencySymbol">
                                            &#36;
                                          </span>
                                          9.99
                                        </bdi>
                                      </span>
                                    </td>
                                  </tr>
                                  <tr
                                    style={{
                                      backgroundColor: "aliceblue",
                                      padding: 10,
                                      borderRadius: 10,
                                    }}
                                  >
                                    <td style={{ fontWeight: "600" }}>
                                      Total Collectable Points
                                    </td>
                                    <td style={{ fontWeight: "600" }}>9.99</td>
                                  </tr>
                                  <tr class="order-total">
                                    <th>Total</th>
                                    <td>
                                      <strong>
                                        <span class="woocommerce-Price-amount amount">
                                          <bdi>
                                            <span class="woocommerce-Price-currencySymbol">
                                              &#36;
                                            </span>
                                            9.99
                                          </bdi>
                                        </span>
                                      </strong>
                                    </td>
                                  </tr>
                                  <tr
                                    class="wc-ppcp-paylater-msg__container"
                                    style={{ display: "none" }}
                                  >
                                    <td colspan="2">
                                      <div id="wc-ppcp-paylater-msg-checkout"></div>
                                    </td>
                                  </tr>
                                </tfoot>
                              </table>
                            </div>
                          </div>
                          <div class="e-coupon-box">
                            <p class="e-woocommerce-coupon-nudge e-checkout-secondary-title">
                              Have a coupon?{" "}
                              <a href="#" class="e-show-coupon-form">
                                Click here to enter your coupon code
                              </a>
                            </p>
                            <div
                              class="e-coupon-anchor"
                              style={{ display: "none" }}
                            >
                              <label class="e-coupon-anchor-description">
                                If you have a coupon code, please apply it
                                below.
                              </label>
                              <div class="form-row">
                                <div class="coupon-container-grid">
                                  <div class="col coupon-col-1 ">
                                    <input
                                      type="text"
                                      name="coupon_code"
                                      class="input-text"
                                      placeholder="Coupon code"
                                      id="coupon_code"
                                      value=""
                                    />
                                  </div>
                                  <div class="col coupon-col-2">
                                    <button
                                      class="woocommerce-button button e-apply-coupon"
                                      name="apply_coupon"
                                      type="submit"
                                    >
                                      Apply
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div class="clear"></div>
                            </div>
                          </div>
                          <div class="e-checkout__order_review-2">
                            <tr>
                              <td colspan="2" style={{ padding: 0 }}>
                                <label
                                  style={{
                                    marginLeft: 3,
                                    cursor: "pointer",
                                    marginBottom: 10,
                                    marginTop: 5,
                                  }}
                                >
                                  <input
                                    type="checkbox"
                                    name="use_points"
                                    value="1"
                                    disabled
                                  />
                                  <span
                                    style={{ paddingLeft: 6, fontWeight: 400 }}
                                  >
                                    Use Points
                                  </span>
                                </label>
                              </td>
                            </tr>
                            <br />
                            <span style={{ color: "#8a8a8a" }}>
                              <small>
                                (Please login to use points, don't have an
                                account? Tick "Create an account?" and start
                                earning points from this order itself!)
                              </small>
                            </span>
                            <div
                              id="payment"
                              class="woocommerce-checkout-payment"
                            >
                              <ul class="wc_payment_methods payment_methods methods">
                                <li class="wc_payment_method payment_method_stripe_cc">
                                  <input
                                    id="payment_method_stripe_cc"
                                    type="radio"
                                    class="input-radio"
                                    name="payment_method"
                                    value="stripe_cc"
                                    checked="checked"
                                    data-order_button_text=""
                                  />
                                  <label for="payment_method_stripe_cc">
                                    Credit/Debit Cards
                                    <span class="wc-stripe-card-icons-container">
                                      <img
                                        data-lazyloaded="1"
                                        src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                                        decoding="async"
                                        class="wc-stripe-card-icon amex"
                                        data-src="https://babysonbroadway.com/wp-content/plugins/woo-stripe-payment/assets/img/cards/amex.svg"
                                        alt="Checkout 2024"
                                        title="Checkout 2024"
                                      />
                                      <noscript>
                                        <img
                                          decoding="async"
                                          class="wc-stripe-card-icon amex"
                                          src="https://babysonbroadway.com/wp-content/plugins/woo-stripe-payment/assets/img/cards/amex.svg"
                                          alt="Checkout 2024"
                                          title="Checkout 2024"
                                        />
                                      </noscript>
                                      <img
                                        data-lazyloaded="1"
                                        src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                                        decoding="async"
                                        class="wc-stripe-card-icon discover"
                                        data-src="https://babysonbroadway.com/wp-content/plugins/woo-stripe-payment/assets/img/cards/discover.svg"
                                        alt="discover Checkout 2024"
                                        title="discover Checkout 2024"
                                      />
                                      <noscript>
                                        <img
                                          decoding="async"
                                          class="wc-stripe-card-icon discover"
                                          src="https://babysonbroadway.com/wp-content/plugins/woo-stripe-payment/assets/img/cards/discover.svg"
                                          alt="discover Checkout 2024"
                                          title="discover Checkout 2024"
                                        />
                                      </noscript>
                                      <img
                                        data-lazyloaded="1"
                                        src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                                        decoding="async"
                                        class="wc-stripe-card-icon visa"
                                        data-src="https://babysonbroadway.com/wp-content/plugins/woo-stripe-payment/assets/img/cards/visa.svg"
                                        alt="visa Checkout 2024"
                                        title="visa Checkout 2024"
                                      />
                                      <noscript>
                                        <img
                                          decoding="async"
                                          class="wc-stripe-card-icon visa"
                                          src="https://babysonbroadway.com/wp-content/plugins/woo-stripe-payment/assets/img/cards/visa.svg"
                                          alt="visa Checkout 2024"
                                          title="visa Checkout 2024"
                                        />
                                      </noscript>
                                      <img
                                        data-lazyloaded="1"
                                        src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                                        decoding="async"
                                        class="wc-stripe-card-icon mastercard"
                                        data-src="https://babysonbroadway.com/wp-content/plugins/woo-stripe-payment/assets/img/cards/mastercard.svg"
                                        alt="mastercard Checkout 2024"
                                        title="mastercard Checkout 2024"
                                      />
                                      <noscript>
                                        <img
                                          decoding="async"
                                          class="wc-stripe-card-icon mastercard"
                                          src="https://babysonbroadway.com/wp-content/plugins/woo-stripe-payment/assets/img/cards/mastercard.svg"
                                          alt="mastercard Checkout 2024"
                                          title="mastercard Checkout 2024"
                                        />
                                      </noscript>
                                    </span>
                                  </label>
                                  <div class="payment_box payment_method_stripe_cc">
                                    <input
                                      type="hidden"
                                      class="wc-stripe-token-field"
                                      id="stripe_cc_token_key"
                                      name="stripe_cc_token_key"
                                      value=""
                                    />
                                    <input
                                      type="hidden"
                                      class="wc-stripe-payment-intent-field"
                                      id="stripe_cc_payment_intent_key"
                                      name="stripe_cc_payment_intent_key"
                                      value=""
                                    />
                                    <input
                                      type="hidden"
                                      class="woocommerce_stripe_cc_gateway_data checkout-page"
                                      data-gateway='{"items":[],"shipping_options":[],"total":"9.99","total_cents":999,"currency":"USD","installments":{"enabled":false},"needs_shipping":true}'
                                    />
                                    <div class="wc-stripe_cc-container wc-stripe-gateway-container">
                                      <div class="wc-stripe_cc-new-method-container">
                                        <div
                                          id="wc-stripe-card-element"
                                          class="payment-type"
                                        ></div>
                                        <div
                                          class="wc-stripe-save-source"
                                          style={{ display: "none" }}
                                        >
                                          <label class="checkbox">
                                            <input
                                              type="checkbox"
                                              id="stripe_cc_save_source_key"
                                              name="stripe_cc_save_source_key"
                                              value="yes"
                                            />
                                            <span class="save-source-checkbox"></span>
                                          </label>
                                          <label class="save-source-label">
                                            Save Card
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li class="wc_payment_method payment_method_stripe_klarna">
                                  <input
                                    id="payment_method_stripe_klarna"
                                    type="radio"
                                    class="input-radio"
                                    name="payment_method"
                                    value="stripe_klarna"
                                    data-order_button_text="Pay with Klarna"
                                  />
                                  <label for="payment_method_stripe_klarna">
                                    Klarna{" "}
                                  </label>
                                  <div
                                    class="payment_box payment_method_stripe_klarna"
                                    style={{ display: "none" }}
                                  >
                                    <input
                                      type="hidden"
                                      class="wc-stripe-token-field"
                                      id="stripe_klarna_token_key"
                                      name="stripe_klarna_token_key"
                                      value=""
                                    />
                                    <input
                                      type="hidden"
                                      class="wc-stripe-payment-intent-field"
                                      id="stripe_klarna_payment_intent_key"
                                      name="stripe_klarna_payment_intent_key"
                                      value=""
                                    />
                                    <input
                                      type="hidden"
                                      class="woocommerce_stripe_klarna_gateway_data checkout-page"
                                      data-gateway='{"items":[],"shipping_options":[],"total":"9.99","total_cents":999,"currency":"USD","installments":{"enabled":false},"needs_shipping":true}'
                                    />
                                    <div class="wc-stripe_klarna-container wc-stripe-gateway-container">
                                      <div class="wc-stripe_klarna-new-method-container">
                                        <div
                                          id="wc_stripe_local_payment_stripe_klarna"
                                          data-active="1"
                                        >
                                          <div class="wc-stripe-offsite-notice-container">
                                            <div class="wc-stripe-offsite-notice">
                                              <img
                                                data-lazyloaded="1"
                                                src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                                                decoding="async"
                                                data-src="https://babysonbroadway.com/wp-content/plugins/woo-stripe-payment/assets/img/offsite.svg"
                                                alt="offsite Checkout 2024"
                                                title="offsite Checkout 2024"
                                              />
                                              <noscript>
                                                <img
                                                  decoding="async"
                                                  src="https://babysonbroadway.com/wp-content/plugins/woo-stripe-payment/assets/img/offsite.svg"
                                                  alt="offsite Checkout 2024"
                                                  title="offsite Checkout 2024"
                                                />
                                              </noscript>
                                              <p>
                                                After clicking &quot;Pay with
                                                Klarna &quot;, you will be
                                                redirected to Klarna to complete
                                                your purchase securely.
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li class="wc_payment_method payment_method_ppcp">
                                  <input
                                    id="payment_method_ppcp"
                                    type="radio"
                                    class="input-radio"
                                    name="payment_method"
                                    value="ppcp"
                                    data-order_button_text="Pay with PayPal"
                                  />
                                  <label for="payment_method_ppcp">
                                    PayPal{" "}
                                    <img
                                      data-lazyloaded="1"
                                      src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                                      decoding="async"
                                      data-src="https://babysonbroadway.com/wp-content/plugins/pymntpl-paypal-woocommerce/assets/img/paypal_logo.svg"
                                      alt="PayPal"
                                      title="paypal logo Checkout 2024"
                                    />
                                    <noscript>
                                      <img
                                        decoding="async"
                                        src="https://babysonbroadway.com/wp-content/plugins/pymntpl-paypal-woocommerce/assets/img/paypal_logo.svg"
                                        alt="PayPal"
                                        title="paypal logo Checkout 2024"
                                      />
                                    </noscript>
                                  </label>
                                  <div
                                    class="payment_box payment_method_ppcp"
                                    style={{ display: "none" }}
                                  >
                                    <input
                                      type="hidden"
                                      class="wc-ppcp-payment-method-data"
                                      data-payment-method-data="[]"
                                    />
                                    <input
                                      type="hidden"
                                      id="ppcp_paypal_order_id"
                                      name="ppcp_paypal_order_id"
                                    />
                                    <input
                                      type="hidden"
                                      id="ppcp_billing_token"
                                      name="ppcp_billing_token"
                                    />
                                    <div class="wc-ppcp-payment-method__container">
                                      <div class="wc-ppcp-popup__container">
                                        <img
                                          data-lazyloaded="1"
                                          src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                                          decoding="async"
                                          data-src="https://babysonbroadway.com/wp-content/plugins/pymntpl-paypal-woocommerce/assets/img/popup.svg"
                                          alt="popup Checkout 2024"
                                          title="popup Checkout 2024"
                                        />
                                        <noscript>
                                          <img
                                            decoding="async"
                                            src="https://babysonbroadway.com/wp-content/plugins/pymntpl-paypal-woocommerce/assets/img/popup.svg"
                                            alt="popup Checkout 2024"
                                            title="popup Checkout 2024"
                                          />
                                        </noscript>
                                        <p>
                                          Click the PayPal button below to
                                          process your order.
                                        </p>
                                      </div>
                                      <div
                                        class="wc-ppcp-order-review-message__container"
                                        style={{ display: "none" }}
                                      >
                                        <div class="wc-ppcp-order-review__message">
                                          Your PayPal payment method is ready to
                                          be processed. Please review your order
                                          details then click %s
                                        </div>
                                        <a
                                          href="#"
                                          class="wc-ppcp-cancel__payment"
                                        >
                                          Cancel
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                              <div class="form-row place-order">
                                <noscript>
                                  Since your browser does not support
                                  JavaScript, or it is disabled, please ensure
                                  you click the <em>Update Totals</em>
                                  button before placing your order. You may be
                                  charged more than the amount stated above if
                                  you fail to do so. <br />
                                  <button
                                    type="submit"
                                    class="button alt"
                                    name="woocommerce_checkout_update_totals"
                                    value="Update totals"
                                  >
                                    Update totals
                                  </button>
                                </noscript>
                                <div class="woocommerce-terms-and-conditions-wrapper">
                                  <div class="woocommerce-privacy-policy-text"></div>
                                  <div
                                    class="woocommerce-terms-and-conditions"
                                    style={{
                                      display: "none",
                                      maxHeight: 200,
                                      overflow: "auto",
                                    }}
                                  >
                                    <h6>
                                      Baby &#8217;s On Broadway Privacy
                                      &amp;Security Policy
                                    </h6>
                                    <h4>Last Updated:</h4>
                                    <h6>Introduction</h6>
                                    <p>
                                      Welcome to Baby &#8217;s On Broadway and
                                      its specialized divisions: TT &#8217;s
                                      Toys &amp;Treats by Baby &#8217;s On
                                      Broadway and Medical by Baby &#8217;s On
                                      Broadway. This Privacy &amp;Security
                                      Policy is designed to transparently inform
                                      you about our practices regarding the
                                      collection, use, protection, and sharing
                                      of your information across our platforms.
                                      We are committed to ensuring the privacy
                                      and security of your personal data, aiming
                                      to foster trust and confidence in our
                                      services.
                                    </p>
                                    <h6>Scope of This Policy</h6>
                                    <p>
                                      This policy applies to information
                                      collected through:
                                    </p>
                                    <ul>
                                      <li>
                                        <strong>
                                          Baby &#8217;s On Broadway:
                                        </strong>
                                        Your destination for a wide range of
                                        baby products, including items eligible
                                        for purchase with FSA/HSA cards.
                                      </li>
                                      <li>
                                        <strong>
                                          TT &#8217;s Toys &amp;Treats by Baby
                                          &#8217;s On Broadway:
                                        </strong>
                                        Specializing in fun and developmental
                                        toys for children from infancy through
                                        the tween years, TT &#8217;s Toys
                                        &amp;Treats offers a curated selection
                                        of products designed to engage, educate,
                                        and entertain.
                                      </li>
                                      <li>
                                        <strong>
                                          Medical by Baby &#8217;s On Broadway:
                                        </strong>
                                        Operating with distinct privacy
                                        practices due to HIPAA compliance, this
                                        site focuses on medical equipment needs
                                        and facilitates purchases that can be
                                        covered by insurance or paid for using
                                        FSA/HSA cards, following a specific
                                        verification process.
                                      </li>
                                    </ul>
                                    <h6>Understanding FSA/HSA Card Usage</h6>
                                    <p>
                                      Clarifying the use of FSA/HSA cards across
                                      our sites is essential for ensuring our
                                      customers are well-informed:
                                    </p>
                                    <h4>Baby &#8217;s On Broadway</h4>
                                    <p>
                                      We offer a selection of products, such as
                                      breast pumps and maternity/postpartum
                                      items, eligible for purchase with FSA/HSA
                                      cards. These transactions are processed
                                      similarly to those made with credit/debit
                                      cards, simplifying the checkout process.
                                    </p>
                                    <ul>
                                      <li>
                                        <p>
                                          <strong>FSA/HSA Card Usage:</strong>
                                          Customers can use their FSA/HSA cards
                                          to purchase eligible products directly
                                          on the Baby &#8217;s On Broadway site
                                          without the need for submitting health
                                          insurance information, designed to be
                                          as straightforward as using a standard
                                          credit/debit card.
                                        </p>
                                      </li>
                                      <li>
                                        <p>
                                          <strong>
                                            Responsibility for Compliance:
                                          </strong>
                                          While we facilitate the use of FSA/HSA
                                          cards for eligible purchases, it is
                                          the cardholder &#8217;s responsibility
                                          to ensure that their purchases comply
                                          with the rules set by their FSA/HSA
                                          plan. Customers may be required to
                                          provide proof of eligibility or
                                          necessity for the purchased products
                                          to their plan administrators.
                                        </p>
                                      </li>
                                    </ul>
                                    <h4>
                                      Medical by Baby &#8217;s On Broadway
                                    </h4>
                                    <p>
                                      For customers seeking medical equipment
                                      that may be covered by insurance or paid
                                      for using FSA/HSA cards, Medical by Baby
                                      &#8217;s On Broadway offers a tailored
                                      process:
                                    </p>
                                    <ul>
                                      <li>
                                        <p>
                                          <strong>
                                            Insurance Verification:
                                          </strong>
                                          Customers interested in purchasing
                                          medical equipment through insurance
                                          will undergo a verification process,
                                          which may include the collection of
                                          health insurance information to
                                          determine coverage eligibility.
                                        </p>
                                      </li>
                                      <li>
                                        <p>
                                          <strong>
                                            FSA/HSA Card Usage
                                            Post-Verification:
                                          </strong>
                                          If insurance coverage is partial or
                                          denied, customers have the option to
                                          use their FSA/HSA cards to cover the
                                          remaining balance or the full cost of
                                          the equipment at a discounted rate,
                                          ensuring access to necessary medical
                                          equipment.
                                        </p>
                                      </li>
                                      <li>
                                        <p>
                                          <strong>
                                            Compliance and Documentation:
                                          </strong>
                                          Customers using their FSA/HSA cards on
                                          the Medical by Baby &#8217;s On
                                          Broadway site are advised that they
                                          may need to provide documentation or
                                          proof of eligibility for their
                                          purchases to their FSA/HSA plan
                                          administrators. The responsibility for
                                          maintaining compliance with FSA/HSA
                                          rules and providing necessary
                                          documentation rests with the
                                          cardholder.
                                        </p>
                                      </li>
                                    </ul>
                                    <h6>
                                      Information Collection
                                      <br />
                                    </h6>
                                    <p>
                                      Across our platforms, we collect
                                      information essential for delivering and
                                      enhancing our services, ensuring a
                                      seamless and personalized shopping
                                      experience. This includes, but is not
                                      limited to:
                                    </p>
                                    <ul>
                                      <li>
                                        <strong>
                                          Identification and Contact Data:
                                        </strong>
                                        Names, addresses, email addresses, and
                                        phone numbers for personalized
                                        communication and efficient order
                                        processing.
                                      </li>
                                      <li>
                                        <strong>Financial Data:</strong>
                                        Securely processed payment information,
                                        including FSA/HSA card details for
                                        eligible transactions, facilitating a
                                        smooth and secure checkout experience.
                                      </li>
                                      <li>
                                        <strong>Account Details:</strong>
                                        Information related to your user
                                        account, such as order history and
                                        preferences, allowing us to tailor our
                                        offerings and recommendations.
                                      </li>
                                    </ul>
                                    <p>
                                      For Medical by Baby &#8217;s On Broadway,
                                      the process may involve collecting
                                      additional information related to health
                                      insurance and medical prescriptions as
                                      part of the insurance verification
                                      process. It &#8217;s important to note
                                      that Medical by Baby &#8217;s On Broadway
                                      operates under its own set of Terms
                                      &amp;Conditions, Privacy Policy, and other
                                      regulatory documents, which are
                                      meticulously designed to adhere to the
                                      highest standards of privacy and data
                                      protection, including compliance with
                                      HIPAA where applicable. Customers
                                      interested in the detailed privacy and
                                      operational practices of Medical by Baby
                                      &#8217;s On Broadway are encouraged to
                                      visit the specific site to review these
                                      documents. This ensures a clear
                                      understanding of how personal and
                                      sensitive information is managed
                                      distinctly from Baby &#8217;s On Broadway
                                      and TT &#8217;s Toys &amp;Treats by Baby
                                      &#8217;s On Broadway, reflecting the
                                      specialized nature of medical equipment
                                      provision and insurance interactions.
                                    </p>
                                    <h6>
                                      Usage and Technical Data
                                      <br />
                                    </h6>
                                    <h4>In-Depth Collection Details</h4>
                                    <p>
                                      When you interact with our sites, we
                                      automatically gather information that does
                                      not identify you personally but helps us
                                      understand how our services are used,
                                      which in turn allows us to create a better
                                      experience for all users. This includes:
                                    </p>
                                    <ul>
                                      <li>
                                        <p>
                                          <strong>
                                            Device and Access Information:
                                          </strong>
                                          We collect specifics about the devices
                                          and methods you use to access our
                                          sites. This encompasses device types
                                          (such as smartphones, tablets, or
                                          desktop computers), operating systems
                                          (like iOS or Android), browser types
                                          (for example, Chrome, Firefox, or
                                          Safari), and IP addresses.
                                          Understanding the technology our
                                          customers use enables us to optimize
                                          our sites for various platforms and
                                          improve security measures.
                                        </p>
                                      </li>
                                      <li>
                                        <p>
                                          <strong>Interaction Data:</strong>
                                          This data includes which pages on our
                                          sites you visit, the content you view,
                                          and how much time you spend on
                                          specific sections. We also track the
                                          sequence of your navigation across our
                                          sites to identify trends in how our
                                          content is consumed, which helps us
                                          prioritize improvements and introduce
                                          new features that respond to our users
                                          &#8217;interests and needs.
                                        </p>
                                      </li>
                                    </ul>
                                    <h4>Cookies and Tracking Technologies</h4>
                                    <p>
                                      We utilize cookies and similar tracking
                                      technologies to enhance site
                                      functionality, personalize the user
                                      experience, and gather analytics about
                                      site usage. These technologies provide
                                      valuable insights that help us to:
                                    </p>
                                    <ul>
                                      <li>
                                        Remember your preferences and settings
                                        for future visits.
                                      </li>
                                      <li>
                                        Analyze site traffic and interaction
                                        patterns to improve content and design.
                                      </li>
                                      <li>
                                        Support our marketing efforts by
                                        understanding the effectiveness of our
                                        campaigns.
                                      </li>
                                    </ul>
                                    <p></p>
                                    <p>
                                      You have the ability to manage the use of
                                      cookies and similar technologies through
                                      your web browser settings. Depending on
                                      your preferences, you can accept all
                                      cookies, be notified when a cookie is set,
                                      or reject all cookies. However, if you
                                      choose to disable cookies, some features
                                      of our sites may not function as intended.
                                    </p>
                                    <h4>Children’s Privacy</h4>
                                    <p>
                                      We are committed to protecting the privacy
                                      of young children and comply with the
                                      Children &#8217;s Online Privacy
                                      Protection Act (COPPA). Our services are
                                      designed for a general audience and are
                                      not targeted at children under the age of
                                      13. We do not knowingly collect any
                                      personal information from children under
                                      13. If we become aware that we have
                                      inadvertently received personal
                                      information from a visitor under the age
                                      of 13 on our site, we will delete the
                                      information from our records.
                                    </p>
                                    <h4>Use of Information</h4>
                                    <p>
                                      The information we collect, including
                                      usage and technical data, plays a crucial
                                      role in our ability to:
                                    </p>
                                    <ul>
                                      <li>
                                        Efficiently fulfill orders and process
                                        payments, ensuring a smooth transaction
                                        process.
                                      </li>
                                      <li>
                                        Provide responsive customer support and
                                        effectively manage user accounts.
                                      </li>
                                      <li>
                                        Continuously improve and personalize the
                                        browsing and shopping experience on our
                                        sites, making your interactions more
                                        enjoyable and relevant.
                                      </li>
                                      <li>
                                        Conduct in-depth analytics and market
                                        research to guide our product selection,
                                        website enhancements, and marketing
                                        strategies.
                                      </li>
                                      <li>
                                        Keep you informed about your orders, new
                                        services, and promotional offers that
                                        might interest you, enhancing your
                                        overall experience with our brands.
                                      </li>
                                    </ul>
                                    <h6>Security Measures</h6>
                                    <p>
                                      At Baby &#8217;s On Broadway, including TT
                                      &#8217;s Toys &amp;Treats and Medical by
                                      Baby &#8217;s On Broadway, we prioritize
                                      the security of your personal information
                                      with the highest level of care and
                                      sophistication. Our security measures are
                                      designed to protect your data from
                                      unauthorized access, alteration,
                                      disclosure, or destruction. These measures
                                      include, but are not limited to:
                                    </p>
                                    <ul>
                                      <li>
                                        <p>
                                          <strong>Encryption:</strong>
                                          We use strong encryption technologies
                                          to secure data transmissions between
                                          your device and our servers, as well
                                          as to encrypt data at rest. This
                                          ensures that your sensitive
                                          information, such as financial details
                                          and personal identifiers, is protected
                                          to the highest standard.
                                        </p>
                                      </li>
                                      <li>
                                        <p>
                                          <strong>
                                            Secure Server Protocols:
                                          </strong>
                                          Our websites are hosted on servers
                                          that implement secure protocols,
                                          including HTTPS, to provide a safe
                                          browsing environment. These protocols
                                          help safeguard your data from
                                          interception or tampering during
                                          transmission.
                                        </p>
                                      </li>
                                      <li>
                                        <p>
                                          <strong>
                                            Regular Security Assessments:
                                          </strong>
                                          We conduct regular security
                                          assessments and audits to identify
                                          potential vulnerabilities in our
                                          systems and applications. This
                                          proactive approach allows us to
                                          address and mitigate risks promptly.
                                        </p>
                                      </li>
                                      <li>
                                        <p>
                                          <strong>Access Controls:</strong>
                                          Access to personal information is
                                          strictly limited to authorized
                                          personnel who have a legitimate
                                          business need to access such data. We
                                          enforce strict access controls and
                                          regularly review permissions to ensure
                                          the integrity of our data protection
                                          practices.
                                        </p>
                                      </li>
                                      <li>
                                        <p>
                                          <strong>
                                            Data Breach Response Plan:
                                          </strong>
                                          Despite our best efforts, no system is
                                          completely secure. In the unlikely
                                          event of a data breach, we have a
                                          comprehensive response plan in place
                                          to promptly address and mitigate the
                                          impact, including notifying affected
                                          individuals and relevant authorities
                                          as required by law.
                                        </p>
                                      </li>
                                    </ul>
                                    <h6>Your Rights and Choices</h6>
                                    <p>
                                      We recognize and respect your rights
                                      regarding your personal information:
                                    </p>
                                    <ul>
                                      <li>
                                        <p>
                                          <strong>
                                            Access to Your Information:
                                          </strong>
                                          You have the right to request access
                                          to the personal information we hold
                                          about you. This allows you to receive
                                          a copy of the personal data we have
                                          and to check that we are lawfully
                                          processing it.
                                        </p>
                                      </li>
                                      <li>
                                        <p>
                                          <strong>
                                            Correction of Your Information:
                                          </strong>
                                          If you believe that any information we
                                          hold about you is incorrect or
                                          incomplete, you have the right to
                                          request a correction. We will promptly
                                          correct any information found to be
                                          inaccurate.
                                        </p>
                                      </li>
                                      <li>
                                        <p>
                                          <strong>
                                            Deletion of Your Information:
                                          </strong>
                                          You have the right to request the
                                          deletion of your personal information
                                          when there is no good reason for us
                                          continuing to process it. This enables
                                          you to ask us to delete or remove
                                          personal data where there is no
                                          compelling reason for its continued
                                          processing.
                                        </p>
                                      </li>
                                      <li>
                                        <p>
                                          <strong>
                                            Restriction on Processing:
                                          </strong>
                                          You have the right to request the
                                          restriction of processing of your
                                          personal information, which allows you
                                          to ask us to suspend the processing of
                                          your personal data in certain
                                          scenarios.
                                        </p>
                                      </li>
                                      <li>
                                        <p>
                                          <strong>
                                            Portability of Your Information:
                                          </strong>
                                          You have the right to data
                                          portability, allowing you to obtain
                                          and reuse your personal data for your
                                          own purposes across different services
                                          in a safe and secure way without
                                          affecting its usability.
                                        </p>
                                      </li>
                                      <li>
                                        <p>
                                          <strong>Object to Processing:</strong>
                                          You have the right to object to the
                                          processing of your personal data where
                                          we are relying on a legitimate
                                          interest (or those of a third party)
                                          and there is something about your
                                          particular situation which makes you
                                          want to object to processing on this
                                          ground.
                                        </p>
                                      </li>
                                    </ul>
                                    <p>
                                      <strong>
                                        For Medical by Baby &#8217;s On Broadway
                                        Users:
                                      </strong>
                                      Additional rights under HIPAA and other
                                      applicable healthcare privacy laws may
                                      apply, including more stringent access,
                                      amendment, and accounting of disclosures
                                      rights related to your health information.
                                    </p>
                                    <h4>Exercising Your Rights</h4>
                                    <p>
                                      At Baby &#8217;s On Broadway, we are
                                      dedicated to ensuring that exercising your
                                      privacy rights is as straightforward and
                                      efficient as possible. Should you wish to
                                      access, correct, delete, or exercise any
                                      other rights related to your personal
                                      information as outlined in this policy,
                                      please follow the steps below:
                                    </p>
                                    <ol>
                                      <li>
                                        <strong>Contact Method:</strong>
                                        You can initiate your request through
                                        any of the following methods:
                                        <ul>
                                          <li>
                                            <strong>Email:</strong>
                                            Send an email to
                                            <a target="_new" rel="noopener">
                                              <span
                                                class="__cf_email__"
                                                data-cfemail="6714060b0214270506051e140809051508060310061e4904080a"
                                              >
                                                [email &#160;protected]
                                              </span>
                                            </a>
                                            . To help us process your request
                                            promptly, please title your email
                                            with the specific right you wish to
                                            exercise (e.g., &#8220;Request for
                                            Data Access,&#8221;&#8220;Request
                                            for Data
                                            Deletion,&#8221;&#8220;Correction of
                                            Personal Information,&#8221;etc.).
                                            Incorrect or vague titling may
                                            result in delays in the processing
                                            of your request.
                                          </li>
                                          <li>
                                            <strong>Postal Mail:</strong>
                                            If you prefer, you can send a
                                            written request to our physical
                                            addresses. Please address your
                                            letter to the attention of
                                            &#8220;Privacy Compliance Officer
                                            &#8221;and specify the nature of
                                            your request clearly in your
                                            correspondence.
                                            <ul>
                                              <li
                                                style={{
                                                  listStyleType: "none",
                                                }}
                                              >
                                                <ul>
                                                  <li>
                                                    <strong>
                                                      Little Falls Location:
                                                    </strong>
                                                    47 East Broadway, Little
                                                    Falls, MN 56345
                                                  </li>
                                                  <li>
                                                    <strong>
                                                      Saint Cloud Location:
                                                    </strong>
                                                    710 W Germain St., Saint
                                                    Cloud, MN 56301
                                                  </li>
                                                </ul>
                                              </li>
                                            </ul>
                                          </li>
                                        </ul>
                                      </li>
                                      <li>
                                        <strong>Verification:</strong>
                                        To protect your privacy and security, we
                                        may need to verify your identity before
                                        processing your request. This
                                        verification process may involve asking
                                        you to provide additional information or
                                        to confirm information that we already
                                        have on file.
                                      </li>
                                      <li>
                                        <strong>Response Time:</strong>
                                        We are committed to addressing your
                                        requests promptly. In accordance with
                                        legal requirements, we will respond to
                                        your request within the legally required
                                        timeframe, which may vary depending on
                                        the nature of the request and the laws
                                        applicable to your situation.
                                      </li>
                                      <li>
                                        <strong>Assistance:</strong>
                                        If you have any questions about how to
                                        exercise your rights or need assistance
                                        with the process, please do not hesitate
                                        to contact us using the provided contact
                                        details. Our team is here to help you
                                        with any concerns or queries you may
                                        have regarding your privacy rights.
                                      </li>
                                    </ol>
                                    <p></p>
                                    <p>
                                      By providing clear instructions and
                                      multiple contact options, we aim to make
                                      the process of exercising your privacy
                                      rights as accessible and user-friendly as
                                      possible. Your privacy is important to us,
                                      and we are here to ensure that your
                                      requests are handled with the care and
                                      attention they deserve.
                                    </p>
                                    <h6>Changes to This Policy</h6>
                                    <p>
                                      At Baby &#8217;s On Broadway, including
                                      our divisions TT &#8217;s Toys &amp;Treats
                                      and Medical by Baby &#8217;s On Broadway,
                                      we are committed to continuously reviewing
                                      and updating our privacy practices to
                                      ensure they meet high standards of data
                                      protection and reflect the evolving needs
                                      of our customers and regulatory changes.
                                      As such:
                                    </p>
                                    <ul>
                                      <li>
                                        <p>
                                          <strong>Policy Updates:</strong>
                                          We reserve the right to amend this
                                          Privacy &amp;Security Policy at any
                                          time to reflect changes in our
                                          operational practices, legal
                                          obligations, or customer feedback. We
                                          aim to ensure our policies are always
                                          aligned with best practices in privacy
                                          and data security.
                                        </p>
                                      </li>
                                      <li>
                                        <p>
                                          <strong>
                                            Notification of Changes:
                                          </strong>
                                          Whenever significant updates are made
                                          to this policy, we will ensure that
                                          these changes are communicated clearly
                                          and prominently on our websites. This
                                          may include, but is not limited to,
                                          notification banners, email alerts to
                                          registered users, or updates in our
                                          regular communications.
                                        </p>
                                      </li>
                                      <li>
                                        <p>
                                          <strong>Reviewing Updates:</strong>
                                          We encourage all users to regularly
                                          review our Privacy &amp;Security
                                          Policy to stay informed about how we
                                          are protecting your information and
                                          any changes that might affect your
                                          rights or how we use your data. The
                                          date of the last update will always be
                                          noted at the top of the policy
                                          document.
                                        </p>
                                      </li>
                                      <li>
                                        <p>
                                          <strong>Feedback:</strong>
                                          Your feedback is invaluable to us in
                                          shaping our privacy practices. If you
                                          have suggestions or concerns about our
                                          policy updates, we welcome you to
                                          reach out via the contact methods
                                          provided.
                                        </p>
                                      </li>
                                    </ul>
                                    <h6>Contact Information</h6>
                                    <p>
                                      For any questions, concerns, or feedback
                                      regarding our privacy practices, or if you
                                      need assistance understanding any aspects
                                      of our Privacy &amp;Security Policy, our
                                      dedicated customer service team is here to
                                      help. You can contact us through the
                                      following channels:
                                    </p>
                                    <ul>
                                      <li>
                                        <p>
                                          <strong>Email:</strong>
                                          For a direct and quick response, email
                                          us at
                                          <a target="_new" rel="noopener">
                                            <span
                                              class="__cf_email__"
                                              data-cfemail="c6b5a7aaa3b586a4a7a4bfb5a9a8a4b4a9a7a2b1a7bfe8a5a9ab"
                                            >
                                              [email &#160;protected]
                                            </span>
                                          </a>
                                          . Please include a clear subject line
                                          to ensure your inquiry is directed to
                                          the appropriate team member promptly.
                                        </p>
                                      </li>
                                      <li>
                                        <p>
                                          <strong>Postal Mail:</strong>
                                          If you prefer or require formal
                                          communication, you can send a letter
                                          to either of our physical locations.
                                          Please address your correspondence to
                                          the &#8220;Privacy Compliance Officer
                                          &#8221;to ensure it is promptly
                                          attended to:
                                        </p>
                                        <ul>
                                          <li>
                                            <strong>
                                              Little Falls Location:
                                            </strong>
                                            47 East Broadway, Little Falls, MN
                                            56345
                                          </li>
                                          <li>
                                            <strong>
                                              Saint Cloud Location:
                                            </strong>
                                            710 W Germain St., Saint Cloud, MN
                                            56301
                                          </li>
                                        </ul>
                                      </li>
                                    </ul>
                                    <p></p>
                                    <ul>
                                      <li>
                                        <p>
                                          <strong>Phone:</strong>
                                          For immediate assistance or to speak
                                          directly with a customer service
                                          representative, call us at (320)
                                          639-2229. Our team is available during
                                          business hours to answer your
                                          questions and provide the support you
                                          need.
                                        </p>
                                      </li>
                                    </ul>
                                    <p>
                                      We are committed to ensuring that your
                                      experience with Baby &#8217;s On Broadway
                                      is secure, private, and enjoyable. Your
                                      trust is important to us, and we strive to
                                      be transparent and responsive in all our
                                      privacy-related communications.
                                    </p>
                                  </div>
                                  <p class="form-row validate-required">
                                    <label class="woocommerce-form__label woocommerce-form__label-for-checkbox checkbox">
                                      <input
                                        type="checkbox"
                                        class="woocommerce-form__input woocommerce-form__input-checkbox input-checkbox"
                                        name="terms"
                                        id="terms"
                                      />
                                      <span class="woocommerce-terms-and-conditions-checkbox-text">
                                        I have read and agree to the website{" "}
                                        <a
                                          href="https://babysonbroadway.com/privacy-security-policy/"
                                          class="woocommerce-terms-and-conditions-link"
                                          target="_blank"
                                        >
                                          terms and conditions
                                        </a>
                                      </span>
                                      &nbsp;
                                      <abbr class="required" title="required">
                                        *
                                      </abbr>
                                    </label>
                                    <input
                                      type="hidden"
                                      name="terms-field"
                                      value="1"
                                    />
                                  </p>
                                </div>
                                <button
                                  type="submit"
                                  class="button alt"
                                  name="woocommerce_checkout_place_order"
                                  id="place_order"
                                  value="Place order"
                                  data-value="Place order"
                                  style={{display:"flex",rubyAlign:"center"}}
                                >
                                  Place order
                                </button>
                                <div class="wc-ppcp-checkout-container"></div>
                                <input
                                  type="hidden"
                                  id="woocommerce-process-checkout-nonce"
                                  name="woocommerce-process-checkout-nonce"
                                  value="cdef72a407"
                                />
                                <input
                                  type="hidden"
                                  name="_wp_http_referer"
                                  value="/checkout-2/"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* </form> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </section> */}
      </div>
    </div>
  );
}

export default Checkout;
