import React from 'react'

function ProductDetail() {
  return (
    <div>
        <nav id="pojo-a11y-toolbar" class="pojo-a11y-toolbar-right pojo-a11y-" role="navigation">
        <div class="pojo-a11y-toolbar-toggle">
            <a class="pojo-a11y-toolbar-link pojo-a11y-toolbar-toggle-link" href="javascript:void(0);"
                title="Accessibility Tools" role="button">
                <span class="pojo-sr-only sr-only">Open toolbar</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="currentColor"
                    width="1em">
                    <title>Accessibility Tools</title>
                    <path
                        d="M50 .8c5.7 0 10.4 4.7 10.4 10.4S55.7 21.6 50 21.6s-10.4-4.7-10.4-10.4S44.3.8 50 .8zM92.2 32l-21.9 2.3c-2.6.3-4.6 2.5-4.6 5.2V94c0 2.9-2.3 5.2-5.2 5.2H60c-2.7 0-4.9-2.1-5.2-4.7l-2.2-24.7c-.1-1.5-1.4-2.5-2.8-2.4-1.3.1-2.2 1.1-2.4 2.4l-2.2 24.7c-.2 2.7-2.5 4.7-5.2 4.7h-.5c-2.9 0-5.2-2.3-5.2-5.2V39.4c0-2.7-2-4.9-4.6-5.2L7.8 32c-2.6-.3-4.6-2.5-4.6-5.2v-.5c0-2.6 2.1-4.7 4.7-4.7h.5c19.3 1.8 33.2 2.8 41.7 2.8s22.4-.9 41.7-2.8c2.6-.2 4.9 1.6 5.2 4.3v1c-.1 2.6-2.1 4.8-4.8 5.1z" />
                </svg>
            </a>
        </div>
        
        <div class="pojo-a11y-toolbar-overlay">
            <div class="pojo-a11y-toolbar-inner">
                <p class="pojo-a11y-toolbar-title">Accessibility Tools</p>
                <ul class="pojo-a11y-toolbar-items pojo-a11y-tools">
                    <li class="pojo-a11y-toolbar-item">
                        <a href="#"
                            class="pojo-a11y-toolbar-link pojo-a11y-btn-resize-font pojo-a11y-btn-resize-plus"
                            data-action="resize-plus" data-action-group="resize" tabindex="-1" role="button">
                            <span class="pojo-a11y-toolbar-icon"><svg version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" width="1em" viewBox="0 0 448 448">
                                    <title>Increase Text</title>
                                    <path fill="currentColor"
                                        d="M256 200v16c0 4.25-3.75 8-8 8h-56v56c0 4.25-3.75 8-8 8h-16c-4.25 0-8-3.75-8-8v-56h-56c-4.25 0-8-3.75-8-8v-16c0-4.25 3.75-8 8-8h56v-56c0-4.25 3.75-8 8-8h16c4.25 0 8 3.75 8 8v56h56c4.25 0 8 3.75 8 8zM288 208c0-61.75-50.25-112-112-112s-112 50.25-112 112 50.25 112 112 112 112-50.25 112-112zM416 416c0 17.75-14.25 32-32 32-8.5 0-16.75-3.5-22.5-9.5l-85.75-85.5c-29.25 20.25-64.25 31-99.75 31-97.25 0-176-78.75-176-176s78.75-176 176-176 176 78.75 176 176c0 35.5-10.75 70.5-31 99.75l85.75 85.75c5.75 5.75 9.25 14 9.25 22.5z">
                                    </path>
                                </svg></span><span class="pojo-a11y-toolbar-text">Increase Text</span> </a>
                    </li>
                    <li class="pojo-a11y-toolbar-item">
                        
                        <a href="#"
                            class="pojo-a11y-toolbar-link pojo-a11y-btn-resize-font pojo-a11y-btn-resize-minus"
                            data-action="resize-minus" data-action-group="resize" tabindex="-1" role="button">
                            <span class="pojo-a11y-toolbar-icon"><svg version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" width="1em" viewBox="0 0 448 448">
                                    <title>Decrease Text</title>
                                    <path fill="currentColor"
                                        d="M256 200v16c0 4.25-3.75 8-8 8h-144c-4.25 0-8-3.75-8-8v-16c0-4.25 3.75-8 8-8h144c4.25 0 8 3.75 8 8zM288 208c0-61.75-50.25-112-112-112s-112 50.25-112 112 50.25 112 112 112 112-50.25 112-112zM416 416c0 17.75-14.25 32-32 32-8.5 0-16.75-3.5-22.5-9.5l-85.75-85.5c-29.25 20.25-64.25 31-99.75 31-97.25 0-176-78.75-176-176s78.75-176 176-176 176 78.75 176 176c0 35.5-10.75 70.5-31 99.75l85.75 85.75c5.75 5.75 9.25 14 9.25 22.5z">
                                    </path>
                                </svg></span><span class="pojo-a11y-toolbar-text">Decrease Text</span> </a>
                    </li>
                    <li class="pojo-a11y-toolbar-item">
                        <a href="#"
                            class="pojo-a11y-toolbar-link pojo-a11y-btn-background-group pojo-a11y-btn-grayscale"
                            data-action="grayscale" data-action-group="schema" tabindex="-1" role="button">
                            <span class="pojo-a11y-toolbar-icon"><svg version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" width="1em" viewBox="0 0 448 448">
                                    <title>Grayscale</title>
                                    <path fill="currentColor"
                                        d="M15.75 384h-15.75v-352h15.75v352zM31.5 383.75h-8v-351.75h8v351.75zM55 383.75h-7.75v-351.75h7.75v351.75zM94.25 383.75h-7.75v-351.75h7.75v351.75zM133.5 383.75h-15.5v-351.75h15.5v351.75zM165 383.75h-7.75v-351.75h7.75v351.75zM180.75 383.75h-7.75v-351.75h7.75v351.75zM196.5 383.75h-7.75v-351.75h7.75v351.75zM235.75 383.75h-15.75v-351.75h15.75v351.75zM275 383.75h-15.75v-351.75h15.75v351.75zM306.5 383.75h-15.75v-351.75h15.75v351.75zM338 383.75h-15.75v-351.75h15.75v351.75zM361.5 383.75h-15.75v-351.75h15.75v351.75zM408.75 383.75h-23.5v-351.75h23.5v351.75zM424.5 383.75h-8v-351.75h8v351.75zM448 384h-15.75v-352h15.75v352z">
                                    </path>
                                </svg></span><span class="pojo-a11y-toolbar-text">Grayscale</span> </a>
                    </li>
                    <li class="pojo-a11y-toolbar-item">
                        <a href="#"
                            class="pojo-a11y-toolbar-link pojo-a11y-btn-background-group pojo-a11y-btn-high-contrast"
                            data-action="high-contrast" data-action-group="schema" tabindex="-1"
                            role="button">
                            <span class="pojo-a11y-toolbar-icon"><svg version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" width="1em" viewBox="0 0 448 448">
                                    <title>High Contrast</title>
                                    <path fill="currentColor"
                                        d="M192 360v-272c-75 0-136 61-136 136s61 136 136 136zM384 224c0 106-86 192-192 192s-192-86-192-192 86-192 192-192 192 86 192 192z">
                                    </path>
                                </svg></span><span class="pojo-a11y-toolbar-text">High Contrast</span> </a>
                    </li>
                    <li class="pojo-a11y-toolbar-item">
                        <a href="#"
                            class="pojo-a11y-toolbar-link pojo-a11y-btn-background-group pojo-a11y-btn-negative-contrast"
                            data-action="negative-contrast" data-action-group="schema" tabindex="-1"
                            role="button"><span class="pojo-a11y-toolbar-icon"><svg version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" width="1em" viewBox="0 0 448 448">
                                    <title>Negative Contrast</title>
                                    <path fill="currentColor"
                                        d="M416 240c-23.75-36.75-56.25-68.25-95.25-88.25 10 17 15.25 36.5 15.25 56.25 0 61.75-50.25 112-112 112s-112-50.25-112-112c0-19.75 5.25-39.25 15.25-56.25-39 20-71.5 51.5-95.25 88.25 42.75 66 111.75 112 192 112s149.25-46 192-112zM236 144c0-6.5-5.5-12-12-12-41.75 0-76 34.25-76 76 0 6.5 5.5 12 12 12s12-5.5 12-12c0-28.5 23.5-52 52-52 6.5 0 12-5.5 12-12zM448 240c0 6.25-2 12-5 17.25-46 75.75-130.25 126.75-219 126.75s-173-51.25-219-126.75c-3-5.25-5-11-5-17.25s2-12 5-17.25c46-75.5 130.25-126.75 219-126.75s173 51.25 219 126.75c3 5.25 5 11 5 17.25z">
                                    </path>
                                </svg></span><span class="pojo-a11y-toolbar-text">Negative Contrast</span> </a>
                    </li>
                    <li class="pojo-a11y-toolbar-item">
                        <a href="#"
                            class="pojo-a11y-toolbar-link pojo-a11y-btn-background-group pojo-a11y-btn-light-background"
                            data-action="light-background" data-action-group="schema" tabindex="-1"
                            role="button">
                            <span class="pojo-a11y-toolbar-icon"><svg version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" width="1em" viewBox="0 0 448 448">
                                    <title>Light Background</title>
                                    <path fill="currentColor"
                                        d="M184 144c0 4.25-3.75 8-8 8s-8-3.75-8-8c0-17.25-26.75-24-40-24-4.25 0-8-3.75-8-8s3.75-8 8-8c23.25 0 56 12.25 56 40zM224 144c0-50-50.75-80-96-80s-96 30-96 80c0 16 6.5 32.75 17 45 4.75 5.5 10.25 10.75 15.25 16.5 17.75 21.25 32.75 46.25 35.25 74.5h57c2.5-28.25 17.5-53.25 35.25-74.5 5-5.75 10.5-11 15.25-16.5 10.5-12.25 17-29 17-45zM256 144c0 25.75-8.5 48-25.75 67s-40 45.75-42 72.5c7.25 4.25 11.75 12.25 11.75 20.5 0 6-2.25 11.75-6.25 16 4 4.25 6.25 10 6.25 16 0 8.25-4.25 15.75-11.25 20.25 2 3.5 3.25 7.75 3.25 11.75 0 16.25-12.75 24-27.25 24-6.5 14.5-21 24-36.75 24s-30.25-9.5-36.75-24c-14.5 0-27.25-7.75-27.25-24 0-4 1.25-8.25 3.25-11.75-7-4.5-11.25-12-11.25-20.25 0-6 2.25-11.75 6.25-16-4-4.25-6.25-10-6.25-16 0-8.25 4.5-16.25 11.75-20.5-2-26.75-24.75-53.5-42-72.5s-25.75-41.25-25.75-67c0-68 64.75-112 128-112s128 44 128 112z">
                                    </path>
                                </svg></span><span class="pojo-a11y-toolbar-text">Light Background</span> </a>
                    </li>
                    <li class="pojo-a11y-toolbar-item">
                        <a href="#" class="pojo-a11y-toolbar-link pojo-a11y-btn-links-underline"
                            data-action="links-underline" data-action-group="toggle" tabindex="-1"
                            role="button">
                            <span class="pojo-a11y-toolbar-icon"><svg version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" width="1em" viewBox="0 0 448 448">
                                    <title>Links Underline</title>
                                    <path fill="currentColor"
                                        d="M364 304c0-6.5-2.5-12.5-7-17l-52-52c-4.5-4.5-10.75-7-17-7-7.25 0-13 2.75-18 8 8.25 8.25 18 15.25 18 28 0 13.25-10.75 24-24 24-12.75 0-19.75-9.75-28-18-5.25 5-8.25 10.75-8.25 18.25 0 6.25 2.5 12.5 7 17l51.5 51.75c4.5 4.5 10.75 6.75 17 6.75s12.5-2.25 17-6.5l36.75-36.5c4.5-4.5 7-10.5 7-16.75zM188.25 127.75c0-6.25-2.5-12.5-7-17l-51.5-51.75c-4.5-4.5-10.75-7-17-7s-12.5 2.5-17 6.75l-36.75 36.5c-4.5 4.5-7 10.5-7 16.75 0 6.5 2.5 12.5 7 17l52 52c4.5 4.5 10.75 6.75 17 6.75 7.25 0 13-2.5 18-7.75-8.25-8.25-18-15.25-18-28 0-13.25 10.75-24 24-24 12.75 0 19.75 9.75 28 18 5.25-5 8.25-10.75 8.25-18.25zM412 304c0 19-7.75 37.5-21.25 50.75l-36.75 36.5c-13.5 13.5-31.75 20.75-50.75 20.75-19.25 0-37.5-7.5-51-21.25l-51.5-51.75c-13.5-13.5-20.75-31.75-20.75-50.75 0-19.75 8-38.5 22-52.25l-22-22c-13.75 14-32.25 22-52 22-19 0-37.5-7.5-51-21l-52-52c-13.75-13.75-21-31.75-21-51 0-19 7.75-37.5 21.25-50.75l36.75-36.5c13.5-13.5 31.75-20.75 50.75-20.75 19.25 0 37.5 7.5 51 21.25l51.5 51.75c13.5 13.5 20.75 31.75 20.75 50.75 0 19.75-8 38.5-22 52.25l22 22c13.75-14 32.25-22 52-22 19 0 37.5 7.5 51 21l52 52c13.75 13.75 21 31.75 21 51z">
                                    </path>
                                </svg></span><span class="pojo-a11y-toolbar-text">Links Underline</span> </a>
                    </li>
                    <li class="pojo-a11y-toolbar-item">
                        <a href="#" class="pojo-a11y-toolbar-link pojo-a11y-btn-readable-font"
                            data-action="readable-font" data-action-group="toggle" tabindex="-1"
                            role="button">
                            <span class="pojo-a11y-toolbar-icon"><svg version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" width="1em" viewBox="0 0 448 448">
                                    <title>Readable Font</title>
                                    <path fill="currentColor"
                                        d="M181.25 139.75l-42.5 112.5c24.75 0.25 49.5 1 74.25 1 4.75 0 9.5-0.25 14.25-0.5-13-38-28.25-76.75-46-113zM0 416l0.5-19.75c23.5-7.25 49-2.25 59.5-29.25l59.25-154 70-181h32c1 1.75 2 3.5 2.75 5.25l51.25 120c18.75 44.25 36 89 55 133 11.25 26 20 52.75 32.5 78.25 1.75 4 5.25 11.5 8.75 14.25 8.25 6.5 31.25 8 43 12.5 0.75 4.75 1.5 9.5 1.5 14.25 0 2.25-0.25 4.25-0.25 6.5-31.75 0-63.5-4-95.25-4-32.75 0-65.5 2.75-98.25 3.75 0-6.5 0.25-13 1-19.5l32.75-7c6.75-1.5 20-3.25 20-12.5 0-9-32.25-83.25-36.25-93.5l-112.5-0.5c-6.5 14.5-31.75 80-31.75 89.5 0 19.25 36.75 20 51 22 0.25 4.75 0.25 9.5 0.25 14.5 0 2.25-0.25 4.5-0.5 6.75-29 0-58.25-5-87.25-5-3.5 0-8.5 1.5-12 2-15.75 2.75-31.25 3.5-47 3.5z">
                                    </path>
                                </svg></span><span class="pojo-a11y-toolbar-text">Readable Font</span> </a>
                    </li>
                    <li class="pojo-a11y-toolbar-item">
                        <a href="#" class="pojo-a11y-toolbar-link pojo-a11y-btn-reset" data-action="reset"
                            tabindex="-1" role="button">
                            <span class="pojo-a11y-toolbar-icon"><svg version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" width="1em" viewBox="0 0 448 448">
                                    <title>Reset</title>
                                    <path fill="currentColor"
                                        d="M384 224c0 105.75-86.25 192-192 192-57.25 0-111.25-25.25-147.75-69.25-2.5-3.25-2.25-8 0.5-10.75l34.25-34.5c1.75-1.5 4-2.25 6.25-2.25 2.25 0.25 4.5 1.25 5.75 3 24.5 31.75 61.25 49.75 101 49.75 70.5 0 128-57.5 128-128s-57.5-128-128-128c-32.75 0-63.75 12.5-87 34.25l34.25 34.5c4.75 4.5 6 11.5 3.5 17.25-2.5 6-8.25 10-14.75 10h-112c-8.75 0-16-7.25-16-16v-112c0-6.5 4-12.25 10-14.75 5.75-2.5 12.75-1.25 17.25 3.5l32.5 32.25c35.25-33.25 83-53 132.25-53 105.75 0 192 86.25 192 192z">
                                    </path>
                                </svg></span>
                            <span class="pojo-a11y-toolbar-text">Reset</span>
                        </a>
                        
                    </li>
                </ul>
            </div>
        </div>
        
    </nav>
    
    
    
        <div data-elementor-type="product" data-elementor-id="632"
        class="elementor elementor-632 elementor-location-single post-63805 product type-product status-publish has-post-thumbnail product_cat-baby-health-safety product_cat-bugaboo-bags product_cat-bugaboo-accessories first instock taxable shipping-taxable purchasable product-type-simple product"
        data-elementor-post-type="elementor_library">
        <div class="elementor-element elementor-element-d81565f elementor-hidden-desktop e-flex e-con-boxed e-con e-parent"
            data-id="d81565f" data-element_type="container"
            data-settings="{&quot;jet_parallax_layout_list&quot;:[]}">
            <div class="e-con-inner">
                <div class="elementor-element elementor-element-5de2310 elementor-widget elementor-widget-woocommerce-product-title elementor-page-title elementor-widget-heading"
                    data-id="5de2310" data-element_type="widget"
                    data-widget_type="woocommerce-product-title.default">
                    <div class="elementor-widget-container">
                        <h3 class="product_title entry-title elementor-heading-title elementor-size-default"><span class='skeleton skeleton-text'>Product Title Long Text</span></h3>
                    </div>
                </div>
                <div class="elementor-element elementor-element-66de599 elementor-widget elementor-widget-jet-single-rating"
                    data-id="66de599" data-element_type="widget" data-widget_type="jet-single-rating.default">
                    <div class="elementor-widget-container">
                        <div class="elementor-jet-single-rating jet-woo-builder">
                            <div class="woocommerce-product-rating empty">
                                <span class="product-star-rating"><span
                                        class="product-rating__icon jetwoo-front-icon-rating-4"></span><span
                                        class="product-rating__icon jetwoo-front-icon-rating-4"></span><span
                                        class="product-rating__icon jetwoo-front-icon-rating-4"></span><span
                                        class="product-rating__icon jetwoo-front-icon-rating-4"></span><span
                                        class="product-rating__icon jetwoo-front-icon-rating-4"></span><span
                                        class="product-star-rating__rated" style={{width: "0%"}}><span
                                            class="product-rating__icon jetwoo-front-icon-rating-4 active"></span><span
                                            class="product-rating__icon jetwoo-front-icon-rating-4 active"></span><span
                                            class="product-rating__icon jetwoo-front-icon-rating-4 active"></span><span
                                            class="product-rating__icon jetwoo-front-icon-rating-4 active"></span><span
                                            class="product-rating__icon jetwoo-front-icon-rating-4 active"></span></span></span>
                                <a href="#" class="woocommerce-review-link" rel="nofollow">
                                    (<span class="count">0</span> reviews) </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="elementor-element elementor-element-3005fd5 e-grid e-con-boxed e-con e-parent" data-id="3005fd5"
            data-element_type="container" data-settings="{&quot;jet_parallax_layout_list&quot;:[]}">
            <div class="e-con-inner">
                <div class="elementor-element elementor-element-135c6a8 e-con-full e-flex e-con e-child"
                    data-id="135c6a8" data-element_type="container"
                    data-settings="{&quot;jet_parallax_layout_list&quot;:[]}">
                    <div class="elementor-element elementor-element-19198b1 elementor-widget__width-initial yes elementor-widget elementor-widget-woocommerce-product-images"
                        data-id="19198b1" data-element_type="widget"
                        data-widget_type="woocommerce-product-images.default">
                        <div class="elementor-widget-container product_gallery product_primary_image">
							<div class="product_thumbnails">
								<div class="product_thumbnail card__header header__img skeleton" style={{width:150,height: 150}} ></div>
								<div class="product_thumbnail card__header header__img skeleton" style={{width:150,height: 150}} ></div>
								<div class="product_thumbnail card__header header__img skeleton" style={{width:150,height: 150}} ></div>
								<div class="product_thumbnail card__header header__img skeleton" style={{width:150,height: 150}}></div>
								<div class="product_thumbnail card__header header__img skeleton" style={{width:150,height: 150}} ></div>
							</div>
							<div class="card__header product_preview_image header__img skeleton" style={{width:800,height: 800}}></div>
						</div>
                    </div>
                    <div class="elementor-element elementor-element-0b7b602 elementor-hidden-mobile elementor-widget elementor-widget-text-editor"
                        data-id="0b7b602" data-element_type="widget" data-widget_type="text-editor.default">
                        <div class="elementor-widget-container">
                            <h2 class="elementor-heading-title elementor-size-default elementor-inline-editing pen"
                                contenteditable="true" data-elementor-setting-key="title"
                                data-pen-placeholder="Type Here..." data-last-active-input="" style={{color:"#5C5C5C"}}>
                                @babysonbroadway​</h2>
                            <p style={{color:"black"}}>Show us how you styled this item!</p>
                        </div>
                    </div>
                    <div class="elementor-element elementor-element-5f7db48 elementor-align-center elementor-hidden-mobile elementor-widget elementor-widget-button"
                        data-id="5f7db48" data-element_type="widget" data-widget_type="button.default">
                        <div class="elementor-widget-container">
                            <div class="elementor-button-wrapper">
                                <a class="elementor-button elementor-button-link elementor-size-sm"
                                    href="#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjMzMjUyIiwidG9nZ2xlIjpmYWxzZX0%3D">
                                    <span class="elementor-button-content-wrapper">
                                        <span class="elementor-button-text">Share your own photo +</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="elementor-element elementor-element-f98eac5 e-con-full e-flex e-con e-child"
                    data-id="f98eac5" data-element_type="container"
                    data-settings="{&quot;jet_parallax_layout_list&quot;:[]}">
                    <div class="elementor-element elementor-element-f3d2e81 elementor-hidden-mobile elementor-widget elementor-widget-woocommerce-product-title elementor-page-title elementor-widget-heading"
                        data-id="f3d2e81" data-element_type="widget" id="product_title"
                        data-widget_type="woocommerce-product-title.default">
                        <div class="elementor-widget-container">
                            <h3 class="product_title entry-title elementor-heading-title elementor-size-default"><span class="skeleton skeleton-text ">Product Title Long Data</span></h3>
                        </div>
                    </div>
                    <div class="elementor-element elementor-element-1d1b755 elementor-hidden-mobile elementor-widget elementor-widget-jet-single-rating"
                        data-id="1d1b755" data-element_type="widget" data-widget_type="jet-single-rating.default">
                        <div class="elementor-widget-container">
                            <div class="elementor-jet-single-rating jet-woo-builder">
                                <div class="woocommerce-product-rating empty">
                                    <span class="product-star-rating"><span
                                            class="product-rating__icon jetwoo-front-icon-rating-4"></span><span
                                            class="product-rating__icon jetwoo-front-icon-rating-4"></span><span
                                            class="product-rating__icon jetwoo-front-icon-rating-4"></span><span
                                            class="product-rating__icon jetwoo-front-icon-rating-4"></span><span
                                            class="product-rating__icon jetwoo-front-icon-rating-4"></span><span
                                            class="product-star-rating__rated" style={{width: "0%"}}><span
                                                class="product-rating__icon jetwoo-front-icon-rating-4 active"></span><span
                                                class="product-rating__icon jetwoo-front-icon-rating-4 active"></span><span
                                                class="product-rating__icon jetwoo-front-icon-rating-4 active"></span><span
                                                class="product-rating__icon jetwoo-front-icon-rating-4 active"></span><span
                                                class="product-rating__icon jetwoo-front-icon-rating-4 active"></span></span></span>
                                    <a href="#" class="woocommerce-review-link" rel="nofollow">
                                        (<span class="count">0</span> reviews) </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="elementor-element elementor-element-d063d3b elementor-woo-meta--view-table elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-woocommerce-product-meta"
                        data-id="d063d3b" data-element_type="widget"
                        data-widget_type="woocommerce-product-meta.default">
                        <div class="elementor-widget-container">
                            <div class="product_meta">
                                <span class="sku_wrapper detail-container">
                                    <span class="detail-label">
                                        SKU
                                    </span>
                                    <span class="sku product_sku"></span>
                                </span>
                                <span class="posted_in detail-container">
                                    <span class="detail-label">Categories</span>
                                    <span class="detail-content product_categories"><span class="skeleton skeleton-text ">&nbsp;&nbsp;&nbsp;</span>, <span class="skeleton skeleton-text ">&nbsp;&nbsp;&nbsp;</span>, <span class="skeleton skeleton-text ">&nbsp;&nbsp;&nbsp;</span></span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="elementor-element elementor-element-d8f6033 elementor-woo-meta--view-inline elementor-widget elementor-widget-woocommerce-product-meta"
                        data-id="d8f6033" data-element_type="widget"
                        data-widget_type="woocommerce-product-meta.default">
                        <div class="elementor-widget-container">
                            <div class="product_meta">
                                <span class="sku_wrapper detail-container">
                                    <span class="detail-label">
                                        SKU
                                    </span>
                                    <span class="sku product_sku"></span>
                                </span>
                                <span class="posted_in detail-container" style={{marginTop: 15}}>
                                    <span class="detail-label"> </span>
                                    <span class="detail-content product_categories"></span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="elementor-element elementor-element-b595323 elementor-widget__width-initial elementor-widget-mobile__width-initial jedv-enabled--yes elementor-widget elementor-widget-html"
                        data-id="b595323" data-element_type="widget" data-widget_type="html.default">
                        <div class="elementor-widget-container">
                            <script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>
                            <div style={{display: "flex",alignItems: "center"}}>
                                <p class="points-container product_points"><span class="skeleton skeleton-text ">Earn 100 points</span></p>
                            </div>
                        </div>
                    </div>
                    <div class="elementor-element elementor-element-5f7aca6 elementor-widget product_price elementor-widget-woocommerce-product-price"
                        data-id="5f7aca6" data-element_type="widget" id="product_price"
                        data-widget_type="woocommerce-product-price.default">
                        <div class="elementor-widget-container">
                            <p class="price product_price_html"><span class="skeleton skeleton-text ">$100</span></p>
                        </div>
                    </div>
                    <div class="elementor-element elementor-element-2ccce78 elementor-add-to-cart--layout-stacked e-add-to-cart--show-quantity-yes elementor-widget elementor-widget-woocommerce-product-add-to-cart"
                        data-id="2ccce78" data-element_type="widget" id="product_qty"
                        data-widget_type="woocommerce-product-add-to-cart.default">
                        <div class="elementor-widget-container">
                            <div class="elementor-add-to-cart elementor-product-simple">
                                <p class="stock in-stock product_stock"><span class="skeleton skeleton-text ">1 in stock</span></p>

								<div class="product_variations">
									<div class="variation skeleton"></div>
									<div class="variation skeleton"></div>
									<div class="variation skeleton"></div>
									<div class="variation skeleton"></div>
									<div class="variation skeleton"></div>
								</div>

                                <form class="cart product_action" action=""  method="post" enctype='multipart/form-data'>
                                    <div class="wapf">
                                        <div class="wapf-wrapper">
                                            <div class="wapf-field-group" data-group="50243">
                                                <div class="wapf-field-row">
                                                    <div class="wapf-field-container wapf-field-radio" style={{width:"100%"}} for="65c4d6444eb38">
                                                        <div class="wapf-field-label wapf--above">
															<label>
																<span>Pick Up Type</span> <abbr class="required" title="required">*</abbr>
															</label>
														</div>
                                                        <div class="wapf-field-input">
                                                            <div class="wapf-radios">
                                                                <div class="wapf-checkable wapf-checked">
																	<label for="98465" class="wapf-input-label">
																		<input
                                                                            id="98465"
                                                                            name="wapf[field_65c4d6444eb38]"
                                                                            class="wapf-input" type="radio"
                                                                            data-field-id="65c4d6444eb38"
                                                                            value="3vt77" required checked /><span
                                                                            class="wapf-label-text">Delivery</span>
																	</label>
                                                                </div>
                                                                <div class="wapf-checkable">
																	<label for="91374"
                                                                        class="wapf-input-label">
																		<input id="91374"
                                                                            name="wapf[field_65c4d6444eb38]"
                                                                            class="wapf-input" type="radio"
                                                                            data-field-id="65c4d6444eb38"
                                                                            value="wxz9k" required /><span
                                                                            class="wapf-label-text">St
                                                                            Cloud</span>
																	</label>
																</div>
                                                                <div class="wapf-checkable">
																	<label for="10809"
                                                                        class="wapf-input-label">
																		<input id="10809"
                                                                            name="wapf[field_65c4d6444eb38]"
                                                                            class="wapf-input" type="radio"
                                                                            data-field-id="65c4d6444eb38"
                                                                            value="iclhy" required /><span
                                                                            class="wapf-label-text">Little
                                                                            Falls</span>
																	</label>
																</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div><input type="hidden" value="50243" name="wapf_field_groups" />
                                        </div>
                                        <div class="wapf-product-totals" data-product-type="simple"
                                            data-product-price="59.95" data-product-id="63805">
                                            <div class="wapf--inner">
                                                <div>
                                                    <span>Product total</span>
                                                    <span class="wapf-product-total price amount"></span>
                                                </div>
                                                <div>
                                                    <span>Options total</span>
                                                    <span class="wapf-options-total price amount"></span>
                                                </div>
                                                <div>
                                                    <span>Grand total</span>
                                                    <span class="wapf-grand-total price amount"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="e-atc-qty-button-holder">
                                        <div class="quantity">
                                            <input type="hidden" id="quantity_663668c333045"
                                                class="input-text qty text" name="quantity" value="1"
                                                aria-label="Product quantity" size="4" min="1"
                                                max="1" step="1" placeholder="" inputmode="numeric"
                                                autocomplete="off" />
                                        </div><button type="submit" name="add-to-cart" value=""
                                            class="single_add_to_cart_button button alt">Add to cart</button>
                                        <div id="wc-stripe-klarna-product-msg"
                                            class="stripe_klarna-product-message wc-stripe-bnpl-product-message"></div>
                                        <div class="wc-ppcp-paylater-msg__container" style={{display: "none"}}>
                                            <div id="wc-ppcp-paylater-msg-product"></div>
                                        </div>
                                    </div>
                                    <div class="wc-stripe-clear"></div>
                                    <div class="wc-stripe-product-checkout-container bottom">
                                        <ul class="wc_stripe_product_payment_methods" style={{listStyle: "none"}}>
                                            <li class="payment_method_stripe_klarna">
                                                <div class="payment-box">
                                                    <input type="hidden"
                                                        class="woocommerce_stripe_klarna_gateway_data product-page"
                                                        data-gateway="{&quot;items&quot;:[],&quot;shipping_options&quot;:[],&quot;total&quot;:&quot;0.00&quot;,&quot;total_cents&quot;:0,&quot;currency&quot;:&quot;USD&quot;,&quot;installments&quot;:{&quot;enabled&quot;:false},&quot;needs_shipping&quot;:true,&quot;product&quot;:{&quot;id&quot;:63805,&quot;price&quot;:59.95,&quot;price_cents&quot;:5995,&quot;variation&quot;:false}}" />
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="elementor-element elementor-element-6f920bf elementor-widget__width-inherit jedv-enabled--yes elementor-widget elementor-widget-html"
                        data-id="6f920bf" data-element_type="widget" data-widget_type="html.default">
                        <div class="elementor-widget-container">
                            
                            <button id="addToRegistryButton"
                                style={{width:520,fontSize: 16, fontWeight: 700, borderRadius: 0,background: "white"}}
                                class="registry-button">Add To Registry</button>
                            <p id="no_variation_selected_id"
                                style={{marginTop: 5, marginBottom: 5,display: "none", color:"red"}}>Please select a
                                variation</p>
                        </div>
                    </div>
                    <div class="elementor-element elementor-element-1386231 elementor-add-to-cart--layout-stacked e-add-to-cart--show-quantity-yes elementor-widget elementor-widget-woocommerce-product-add-to-cart"
                        data-id="1386231" data-element_type="widget"
                        data-widget_type="woocommerce-product-add-to-cart.default">
                        <div class="elementor-widget-container">
                            <div class="elementor-add-to-cart elementor-product-simple">
                                <form class="cart product_action" action="" method="post" enctype='multipart/form-data'>
                                    <div class="wapf">
                                        <div class="wapf-wrapper">
                                            <div class="wapf-field-group" data-group="50243">
                                                <div class="wapf-field-row">
                                                    <div class="wapf-field-container wapf-field-radio"
                                                        style={{width:"100%"}} for="65c4d6444eb38">
                                                        <div class="wapf-field-label wapf--above"><label><span>Pick Up
                                                                    Type</span> <abbr class="required"
                                                                    title="required">*</abbr></label></div>
                                                        <div class="wapf-field-input">
                                                            <div class="wapf-radios">
                                                                <div class="wapf-checkable wapf-checked"><label
                                                                        for="10281" class="wapf-input-label"><input
                                                                            id="10281"
                                                                            name="wapf[field_65c4d6444eb38]"
                                                                            class="wapf-input" type="radio"
                                                                            data-field-id="65c4d6444eb38"
                                                                            value="3vt77" required checked /><span
                                                                            class="wapf-label-text">Delivery</span></label>
                                                                </div>
                                                                <div class="wapf-checkable"><label for="46896"
                                                                        class="wapf-input-label"><input id="46896"
                                                                            name="wapf[field_65c4d6444eb38]"
                                                                            class="wapf-input" type="radio"
                                                                            data-field-id="65c4d6444eb38"
                                                                            value="wxz9k" required /><span
                                                                            class="wapf-label-text">St
                                                                            Cloud</span></label></div>
                                                                <div class="wapf-checkable"><label for="63184"
                                                                        class="wapf-input-label"><input id="63184"
                                                                            name="wapf[field_65c4d6444eb38]"
                                                                            class="wapf-input" type="radio"
                                                                            data-field-id="65c4d6444eb38"
                                                                            value="iclhy" required /><span
                                                                            class="wapf-label-text">Little
                                                                            Falls</span></label></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div><input type="hidden" value="50243" name="wapf_field_groups" />
                                        </div>
                                        <div class="wapf-product-totals" data-product-type="simple"
                                            data-product-price="59.95" data-product-id="63805">
                                            <div class="wapf--inner">
                                                <div>
                                                    <span>Product total</span>
                                                    <span class="wapf-product-total price amount"></span>
                                                </div>
                                                <div>
                                                    <span>Options total</span>
                                                    <span class="wapf-options-total price amount"></span>
                                                </div>
                                                <div>
                                                    <span>Grand total</span>
                                                    <span class="wapf-grand-total price amount"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="e-atc-qty-button-holder">
                                        <div class="quantity">
                                            <label class="screen-reader-text product_name" for="quantity_663668c337cc0"> name quantity</label>
                                            <input type="hidden" id="quantity_663668c337cc0"
                                                class="input-text qty text" name="quantity" value="1"
                                                aria-label="Product quantity" size="4" min="1"
                                                max="1" step="1" placeholder="" inputmode="numeric"
                                                autocomplete="off" />
                                        </div><button type="submit" name="add-to-cart" value="63805"
                                            class="single_add_to_cart_button button alt">Add to cart</button>
                                        <div id="wc-stripe-klarna-product-msg"
                                            class="stripe_klarna-product-message wc-stripe-bnpl-product-message"></div>
                                        <div class="wc-ppcp-paylater-msg__container" style={{display: "none"}}>
                                            <div id="wc-ppcp-paylater-msg-product"></div>
                                        </div>
                                    </div>
                                    <div class="wc-stripe-clear"></div>
                                    <div class="wc-stripe-product-checkout-container bottom">
                                        <ul class="wc_stripe_product_payment_methods" style={{listStyle:"none"}}>
                                            <li class="payment_method_stripe_klarna">
                                                <div class="payment-box">
                                                    <input type="hidden"
                                                        class="woocommerce_stripe_klarna_gateway_data product-page"
                                                        data-gateway="{&quot;items&quot;:[],&quot;shipping_options&quot;:[],&quot;total&quot;:&quot;0.00&quot;,&quot;total_cents&quot;:0,&quot;currency&quot;:&quot;USD&quot;,&quot;installments&quot;:{&quot;enabled&quot;:false},&quot;needs_shipping&quot;:true,&quot;product&quot;:{&quot;id&quot;:63805,&quot;price&quot;:59.95,&quot;price_cents&quot;:5995,&quot;variation&quot;:false}}" />
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="elementor-element elementor-element-71029cb elementor-widget elementor-widget-heading"
                        data-id="71029cb" data-element_type="widget" id="product_img"
                        data-widget_type="heading.default">
                        <div class="elementor-widget-container">
                            <h2 class="elementor-heading-title elementor-size-default product_primary_image"></h2>
                        </div>
                    </div>
                    <div class="elementor-element elementor-element-b820b6b elementor-widget elementor-widget-heading"
                        data-id="b820b6b" data-element_type="widget" id="product_sku"
                        data-widget_type="heading.default">
                        <div class="elementor-widget-container">
                            <h2 class="elementor-heading-title elementor-size-default product_sku"></h2>
                        </div>
                    </div>
                    <div class="elementor-element elementor-element-feddbbd elementor-hidden-desktop elementor-hidden-tablet elementor-widget elementor-widget-spacer"
                        data-id="feddbbd" data-element_type="widget" data-widget_type="spacer.default">
                        <div class="elementor-widget-container">
                            <div class="elementor-spacer">
                                <div class="elementor-spacer-inner"></div>
                            </div>
                        </div>
                    </div>
                    <div class="elementor-element elementor-element-d3e4cd6 elementor-hidden-desktop elementor-hidden-tablet e-flex e-con-boxed e-con e-child"
                        data-id="d3e4cd6" data-element_type="container"
                        data-settings="{&quot;jet_parallax_layout_list&quot;:[]}">
                        <div class="e-con-inner">
                            <div class="elementor-element elementor-element-3e507cc elementor-share-buttons--skin-minimal elementor-share-buttons--shape-circle elementor-share-buttons--align-left elementor-share-buttons--color-custom elementor-widget__width-initial elementor-share-buttons-mobile--align-center elementor-widget-mobile__width-initial elementor-share-buttons--view-icon-text elementor-grid-0 elementor-widget elementor-widget-share-buttons"
                                data-id="3e507cc" data-element_type="widget"
                                data-widget_type="share-buttons.default">
                                <div class="elementor-widget-container">
                                    <div class="elementor-grid">
                                        <div class="elementor-grid-item">
                                            <div class="elementor-share-btn elementor-share-btn_facebook"
                                                role="button" tabindex="0" aria-label="Share on facebook">
                                                <span class="elementor-share-btn__icon">
                                                    <svg class="e-font-icon-svg e-fab-facebook"
                                                        viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z">
                                                        </path>
                                                    </svg> </span>
                                                <div class="elementor-share-btn__text">
                                                    <span class="elementor-share-btn__title">
                                                        Share </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="elementor-grid-item">
                                            <div class="elementor-share-btn elementor-share-btn_twitter"
                                                role="button" tabindex="0" aria-label="Share on twitter">
                                                <span class="elementor-share-btn__icon">
                                                    <svg class="e-font-icon-svg e-fab-twitter" viewBox="0 0 512 512"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
                                                        </path>
                                                    </svg> </span>
                                                <div class="elementor-share-btn__text">
                                                    <span class="elementor-share-btn__title">
                                                        Suggest </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="elementor-grid-item">
                                            <div class="elementor-share-btn elementor-share-btn_pinterest"
                                                role="button" tabindex="0" aria-label="Share on pinterest">
                                                <span class="elementor-share-btn__icon">
                                                    <svg class="e-font-icon-svg e-fab-pinterest"
                                                        viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z">
                                                        </path>
                                                    </svg> </span>
                                                <div class="elementor-share-btn__text">
                                                    <span class="elementor-share-btn__title">
                                                        Pin it </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="elementor-element elementor-element-5ecb2e4 e-con-full e-flex e-con e-child"
                        data-id="5ecb2e4" data-element_type="container"
                        data-settings="{&quot;jet_parallax_layout_list&quot;:[]}">
                        <div class="elementor-element elementor-element-8a2fd93 elementor-share-buttons--skin-minimal elementor-share-buttons--shape-circle elementor-share-buttons--align-left elementor-share-buttons--color-custom elementor-widget__width-initial elementor-hidden-mobile elementor-share-buttons--view-icon-text elementor-grid-0 elementor-widget elementor-widget-share-buttons"
                            data-id="8a2fd93" data-element_type="widget" data-widget_type="share-buttons.default">
                            <div class="elementor-widget-container">
                                <div class="elementor-grid">
                                    <div class="elementor-grid-item">
                                        <div class="elementor-share-btn elementor-share-btn_facebook" role="button"
                                            tabindex="0" aria-label="Share on facebook">
                                            <span class="elementor-share-btn__icon">
                                                <svg class="e-font-icon-svg e-fab-facebook" viewBox="0 0 512 512"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z">
                                                    </path>
                                                </svg> </span>
                                            <div class="elementor-share-btn__text">
                                                <span class="elementor-share-btn__title">
                                                    Share </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="elementor-grid-item">
                                        <div class="elementor-share-btn elementor-share-btn_twitter" role="button"
                                            tabindex="0" aria-label="Share on twitter">
                                            <span class="elementor-share-btn__icon">
                                                <svg class="e-font-icon-svg e-fab-twitter" viewBox="0 0 512 512"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
                                                    </path>
                                                </svg> </span>
                                            <div class="elementor-share-btn__text">
                                                <span class="elementor-share-btn__title">
                                                    Suggest </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="elementor-grid-item">
                                        <div class="elementor-share-btn elementor-share-btn_pinterest"
                                            role="button" tabindex="0" aria-label="Share on pinterest">
                                            <span class="elementor-share-btn__icon">
                                                <svg class="e-font-icon-svg e-fab-pinterest" viewBox="0 0 496 512"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z">
                                                    </path>
                                                </svg> </span>
                                            <div class="elementor-share-btn__text">
                                                <span class="elementor-share-btn__title">
                                                    Pin it </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="elementor-element elementor-element-5ecce92 elementor-widget__width-initial elementor-mobile-align-center elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                            data-id="5ecce92" data-element_type="widget" data-widget_type="icon-list.default">
                            <div class="elementor-widget-container">
                                <ul class="elementor-icon-list-items">
                                    <li class="elementor-icon-list-item">
                                        <a href="#review"><span class="elementor-icon-list-icon">
                                                <i aria-hidden="true" class="icon icon-chevron-down-circle"></i>
                                            </span>
                                            <span class="elementor-icon-list-text">Jump to Feedbacks</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="elementor-element elementor-element-1a1b8d6 e-flex e-con-boxed e-con e-child"
                        data-id="1a1b8d6" data-element_type="container"
                        data-settings="{&quot;jet_parallax_layout_list&quot;:[]}">
                        <div class="e-con-inner">
                            <div class="elementor-element elementor-element-90162ea elementor-widget__width-initial elementor-widget elementor-widget-accordion"
                                data-id="90162ea" data-element_type="widget" data-widget_type="accordion.default">
                                <div class="elementor-widget-container">
                                    <div class="elementor-accordion">
                                        <div class="elementor-accordion-item">
                                            <div id="elementor-tab-title-1511" class="elementor-tab-title"
                                                data-tab="1" role="button"
                                                aria-controls="elementor-tab-content-1511" aria-expanded="false">
                                                <span class="elementor-accordion-icon elementor-accordion-icon-right"
                                                    aria-hidden="true">
                                                    <span class="elementor-accordion-icon-closed"><svg
                                                            class="e-font-icon-svg e-fas-plus" viewBox="0 0 448 512"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z">
                                                            </path>
                                                        </svg></span>
                                                    <span class="elementor-accordion-icon-opened"><svg
                                                            class="e-font-icon-svg e-fas-minus"
                                                            viewBox="0 0 448 512"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z">
                                                            </path>
                                                        </svg></span>
                                                </span>
                                                <a class="elementor-accordion-title" tabindex="0">Accordion
                                                    Title</a>
                                            </div>
                                            <div id="elementor-tab-content-1511"
                                                class="elementor-tab-content elementor-clearfix" data-tab="1"
                                                role="region" aria-labelledby="elementor-tab-title-1511">Accordion
                                                Content</div>
                                        </div>
                                        <div class="elementor-accordion-item">
                                            <div id="elementor-tab-title-1512" class="elementor-tab-title"
                                                data-tab="2" role="button"
                                                aria-controls="elementor-tab-content-1512" aria-expanded="false">
                                                <span class="elementor-accordion-icon elementor-accordion-icon-right"
                                                    aria-hidden="true">
                                                    <span class="elementor-accordion-icon-closed"><svg
                                                            class="e-font-icon-svg e-fas-plus" viewBox="0 0 448 512"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z">
                                                            </path>
                                                        </svg></span>
                                                    <span class="elementor-accordion-icon-opened"><svg
                                                            class="e-font-icon-svg e-fas-minus"
                                                            viewBox="0 0 448 512"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z">
                                                            </path>
                                                        </svg></span>
                                                </span>
                                                <a class="elementor-accordion-title" tabindex="0">Description</a>
                                            </div>
                                            <div id="elementor-tab-content-1512"
                                                class="elementor-tab-content elementor-clearfix" data-tab="2"
                                                role="region" aria-labelledby="elementor-tab-title-1512">
                                                <p class="product_description">
													<span class="skeleton skeleton-text">There is a description to be loaded for this product via ajax, please be patient</span>
												</p>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="elementor-element elementor-element-06e63ad elementor-widget__width-initial elementor-widget elementor-widget-accordion"
                                data-id="06e63ad" data-element_type="widget" data-widget_type="accordion.default">
                                <div class="elementor-widget-container">
                                    <div class="elementor-accordion">
                                        <div class="elementor-accordion-item">
                                            <div id="elementor-tab-title-7231" class="elementor-tab-title"
                                                data-tab="1" role="button"
                                                aria-controls="elementor-tab-content-7231" aria-expanded="false">
                                                <span class="elementor-accordion-icon elementor-accordion-icon-right"
                                                    aria-hidden="true">
                                                    <span class="elementor-accordion-icon-closed"><svg
                                                            class="e-font-icon-svg e-fas-plus" viewBox="0 0 448 512"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z">
                                                            </path>
                                                        </svg></span>
                                                    <span class="elementor-accordion-icon-opened"><svg
                                                            class="e-font-icon-svg e-fas-minus"
                                                            viewBox="0 0 448 512"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z">
                                                            </path>
                                                        </svg></span>
                                                </span>
                                                <a class="elementor-accordion-title" tabindex="0">Accordion
                                                    Title</a>
                                            </div>
                                            <div id="elementor-tab-content-7231"
                                                class="elementor-tab-content elementor-clearfix" data-tab="1"
                                                role="region" aria-labelledby="elementor-tab-title-7231">Accordion
                                                Content</div>
                                        </div>
                                        <div class="elementor-accordion-item">
                                            <div id="elementor-tab-title-7232" class="elementor-tab-title"
                                                data-tab="2" role="button"
                                                aria-controls="elementor-tab-content-7232" aria-expanded="false">
                                                <span class="elementor-accordion-icon elementor-accordion-icon-right"
                                                    aria-hidden="true">
                                                    <span class="elementor-accordion-icon-closed"><svg
                                                            class="e-font-icon-svg e-fas-plus" viewBox="0 0 448 512"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z">
                                                            </path>
                                                        </svg></span>
                                                    <span class="elementor-accordion-icon-opened"><svg
                                                            class="e-font-icon-svg e-fas-minus"
                                                            viewBox="0 0 448 512"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z">
                                                            </path>
                                                        </svg></span>
                                                </span>
                                                <a class="elementor-accordion-title" tabindex="0">Dimensions &
                                                    Care</a>
                                            </div>
                                            <div id="elementor-tab-content-7232"
                                                class="elementor-tab-content elementor-clearfix product_dimensions" data-tab="2"
                                                role="region" aria-labelledby="elementor-tab-title-7232">There is
                                                no dimension information for this product</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="elementor-element elementor-element-3d848ce elementor-widget__width-initial elementor-widget elementor-widget-accordion"
                                data-id="3d848ce" data-element_type="widget" data-widget_type="accordion.default">
                                <div class="elementor-widget-container">
                                    <div class="elementor-accordion">
                                        <div class="elementor-accordion-item">
                                            <div id="elementor-tab-title-6451" class="elementor-tab-title"
                                                data-tab="1" role="button"
                                                aria-controls="elementor-tab-content-6451" aria-expanded="false">
                                                <span class="elementor-accordion-icon elementor-accordion-icon-right"
                                                    aria-hidden="true">
                                                    <span class="elementor-accordion-icon-closed"><svg
                                                            class="e-font-icon-svg e-fas-plus" viewBox="0 0 448 512"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z">
                                                            </path>
                                                        </svg></span>
                                                    <span class="elementor-accordion-icon-opened"><svg
                                                            class="e-font-icon-svg e-fas-minus"
                                                            viewBox="0 0 448 512"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z">
                                                            </path>
                                                        </svg></span>
                                                </span>
                                                <a class="elementor-accordion-title" tabindex="0">Accordion
                                                    Title</a>
                                            </div>
                                            <div id="elementor-tab-content-6451"
                                                class="elementor-tab-content elementor-clearfix" data-tab="1"
                                                role="region" aria-labelledby="elementor-tab-title-6451">Accordion
                                                Content</div>
                                        </div>
                                        <div class="elementor-accordion-item">
                                            <div id="elementor-tab-title-6452" class="elementor-tab-title"
                                                data-tab="2" role="button"
                                                aria-controls="elementor-tab-content-6452" aria-expanded="false">
                                                <span class="elementor-accordion-icon elementor-accordion-icon-right"
                                                    aria-hidden="true">
                                                    <span class="elementor-accordion-icon-closed"><svg
                                                            class="e-font-icon-svg e-fas-plus" viewBox="0 0 448 512"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z">
                                                            </path>
                                                        </svg></span>
                                                    <span class="elementor-accordion-icon-opened"><svg
                                                            class="e-font-icon-svg e-fas-minus"
                                                            viewBox="0 0 448 512"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z">
                                                            </path>
                                                        </svg></span>
                                                </span>
                                                <a class="elementor-accordion-title" tabindex="0">Shipping &
                                                    Returns</a>
                                            </div>
                                            <div id="elementor-tab-content-6452"
                                                class="elementor-tab-content elementor-clearfix" data-tab="2"
                                                role="region" aria-labelledby="elementor-tab-title-6452">
                                                <p><strong>PLEASE READ IMPORTANT INFORMATION ABOUT YOUR ORDER AND
                                                        TRACKING</strong></p>
                                                <p>You should have received a confirmation email which will provide any
                                                    information pertinent to your order such as possible backorders,
                                                    etc.</p>
                                                <p>Your order will remain in PROCESSING until we have tracking ready for
                                                    your order.You should expect your in-stock item(s) to arrive within
                                                    7 -14 days of placing your order. However, please know that some
                                                    orders may take longer and we will do our best to keep you updated.
                                                </p>
                                                <p>Please TAKE NOTE: the shipping or pre-order timeframe for your item
                                                    as listed on our website when you order is placed is an accurate
                                                    estimate of your wait based on the information we have from the
                                                    manufacturer at that time.</p>
                                                <p>It is likely it may change at any time and we will not have tracking
                                                    or shipping information until your item is available to ship. Once
                                                    your order has shipped, you will receive an email with tracking
                                                    information.</p>
                                                <p>Please also note some items will be shipped directly from the vendor.
                                                    In those instances, we will often not have exact tracking
                                                    information, but will be able to provide an accurate time quote.</p>
                                                <p>If you have any questions, please email us any time (with your order
                                                    number) and you will receive an email within 1-2 business days
                                                    responding to your inquiry. Please send emails to {<a
                                                        href="/cdn-cgi/l/email-protection" class="__cf_email__"
                                                        data-cfemail="2251434e4751624043405b514d4c40504d434655435b0c414d4f">[email&#160;protected]</a>}.
                                                    Thank you so much for shopping with us!</p>
                                            </div>
                                        </div>
                                        <div class="elementor-accordion-item">
                                            <div id="elementor-tab-title-6453" class="elementor-tab-title"
                                                data-tab="3" role="button"
                                                aria-controls="elementor-tab-content-6453" aria-expanded="false">
                                                <span class="elementor-accordion-icon elementor-accordion-icon-right"
                                                    aria-hidden="true">
                                                    <span class="elementor-accordion-icon-closed"><svg
                                                            class="e-font-icon-svg e-fas-plus" viewBox="0 0 448 512"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z">
                                                            </path>
                                                        </svg></span>
                                                    <span class="elementor-accordion-icon-opened"><svg
                                                            class="e-font-icon-svg e-fas-minus"
                                                            viewBox="0 0 448 512"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z">
                                                            </path>
                                                        </svg></span>
                                                </span>
                                                <a class="elementor-accordion-title" tabindex="0">Our Safety and
                                                    Quality Commitment</a>
                                            </div>
                                            <div id="elementor-tab-content-6453"
                                                class="elementor-tab-content elementor-clearfix" data-tab="3"
                                                role="region" aria-labelledby="elementor-tab-title-6453">
                                                <p>At Baby&#8217;s on Broadway, we are committed to ensuring the safety
                                                    and quality of every product we offer for your precious little ones.
                                                    Your child&#8217;s well-being is our top priority, and we strive to
                                                    provide you with the highest standards of safety, quality, and
                                                    satisfaction.</p>
                                                <h4>Safety Assurance</h4>
                                                <ol>
                                                    <li><strong>Product Compliance:</strong> We meticulously select and
                                                        curate our products to ensure they comply with international
                                                        safety standards and regulations.</li>
                                                    <li><strong>Thorough Testing:</strong> All products undergo rigorous
                                                        testing to guarantee they meet our stringent safety criteria.
                                                        This includes assessments for choking hazards, chemical safety,
                                                        and durability.</li>
                                                    <li><strong>Age-Appropriate Recommendations:</strong> We provide
                                                        clear and accurate age recommendations for each product, helping
                                                        you choose items that are suitable for your child&#8217;s
                                                        developmental stage.</li>
                                                    <li><strong>Transparent Information:</strong> Product descriptions
                                                        include detailed information about materials used, safety
                                                        features, and care instructions to empower you with the
                                                        knowledge needed to make informed choices.</li>
                                                </ol>
                                                <h4>Quality Commitment</h4>
                                                <ol>
                                                    <li><strong>Premium Selection:</strong> We source our products from
                                                        trusted manufacturers and brands known for their commitment to
                                                        quality craftsmanship.</li>
                                                    <li><strong>Durability:</strong> Our products are designed to
                                                        withstand the wear and tear of everyday use, ensuring they can
                                                        be enjoyed by your little ones for an extended period.</li>
                                                    <li><strong>Customer Reviews:</strong> We value feedback from our
                                                        customers and actively use it to improve our product selection
                                                        and services. Your satisfaction is a key indicator of our
                                                        commitment to quality.</li>
                                                    <li><strong>Responsive Customer Support:</strong> Our dedicated
                                                        customer support team is ready to assist you with any questions
                                                        or concerns regarding the safety and quality of our products.
                                                    </li>
                                                </ol>
                                                <h4>Continuous Improvement</h4>
                                                <ol>
                                                    <li><strong>Monitoring and Feedback:</strong> We continuously
                                                        monitor industry trends, safety standards, and customer feedback
                                                        to enhance our product selection and service offerings.</li>
                                                    <li><strong>Regular Updates:</strong> We keep you informed about any
                                                        product recalls, safety updates, or improvements through our
                                                        website and communication channels.</li>
                                                    <li><strong>Educational Resources:</strong> We provide educational
                                                        resources to help you stay informed about child safety and
                                                        development, offering tips and guidance on creating a safe
                                                        environment for your little ones.</li>
                                                </ol>
                                                <p>At Baby&#8217;s on Broadway, we take pride in offering a safe and
                                                    enjoyable shopping experience for you and your family. Thank you for
                                                    trusting us with the well-being of your precious ones.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="elementor-element elementor-element-85949de e-flex e-con-boxed e-con e-parent" data-id="85949de"
            data-element_type="container" data-settings="{&quot;jet_parallax_layout_list&quot;:[]}">
            <div class="e-con-inner">
                <div class="elementor-element elementor-element-677f35c elementor-widget-divider--view-line_text elementor-widget-divider--element-align-center elementor-widget elementor-widget-divider"
                    data-id="677f35c" data-element_type="widget" data-widget_type="divider.default">
                    <div class="elementor-widget-container">
                        <div class="elementor-divider">
                            <span class="elementor-divider-separator">
                                <span class="elementor-divider__text elementor-divider__element">
                                    Pairs well with </span>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="woocommerce elementor-element elementor-element-50efcdb elementor-grid-5 elementor-grid-tablet-2 elementor-grid-mobile-1 elementor-widget elementor-widget-loop-grid"
                    data-id="50efcdb" data-element_type="widget"
                    data-settings="{&quot;_skin&quot;:&quot;product&quot;,&quot;template_id&quot;:&quot;32610&quot;,&quot;columns&quot;:5,&quot;columns_tablet&quot;:&quot;2&quot;,&quot;columns_mobile&quot;:&quot;1&quot;,&quot;edit_handle_selector&quot;:&quot;[data-elementor-type=\&quot;loop-item\&quot;]&quot;,&quot;row_gap&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;row_gap_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;row_gap_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]}}"
                    data-widget_type="loop-grid.product">
                    <div class="elementor-widget-container">
                        <div class="elementor-loop-container elementor-grid product_related">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="xoo-wsc-markup">
        <div class="xoo-wsc-modal">
            <div class="xoo-wsc-container">
                <div class="xoo-wsc-basket"><span class="xoo-wsc-items-count">0</span><span
                        class="xoo-wsc-bki xoo-wsc-icon-cart2"></span></div>
                <div class="xoo-wsc-header">
                    <div class="xoo-wsch-top">
                        <div class="xoo-wsc-notice-container" data-section="cart">
                            <ul class="xoo-wsc-notices"></ul>
                        </div>
                        <div class="xoo-wsch-basket">
                            <span class="xoo-wscb-icon xoo-wsc-icon-bag2"></span>
                            <span class="xoo-wscb-count">0</span>
                        </div>
                        <span class="xoo-wsch-text">Your Cart</span>
                        <span class="xoo-wsch-close xoo-wsc-icon-cross"></span>
                    </div>
                </div>
                <div class="xoo-wsc-body">
                    <div class="xoo-wsc-empty-cart"><span>Your cart is empty</span><a class="xoo-wsc-btn"
                            href="https://babysonbroadway.com/shop/">Return to Shop</a></div>
                </div>
                <div class="xoo-wsc-footer">
                    <div class="xoo-wsc-ft-buttons-cont"><a href="#"
                            class="xoo-wsc-ft-btn xoo-wsc-btn xoo-wsc-cart-close xoo-wsc-ft-btn-continue">Continue
                            Shopping</a></div>
                </div><span class="xoo-wsc-loader"></span>
                <span class="xoo-wsc-icon-spinner8 xoo-wsc-loader-icon"></span>
            </div>
            <span class="xoo-wsc-opac"></span>
        </div>
        <script src="https://babysonbroadway.com/wp-content/plugins/side-cart-woocommerce/assets/js/xoo-wsc-main.js?ver=2.4.9"        id="xoo-wsc-main-js-js" defer data-wp-strategy="defer"></script>
    </div>        
    </div>
    </div>
  )
}

export default ProductDetail