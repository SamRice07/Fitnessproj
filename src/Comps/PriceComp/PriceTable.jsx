import React from 'react'
import './PriceTable.scss'
import jQuery from 'jquery';
import $ from 'jquery'
import {useEffect} from 'react'
/* global Modernizr */

export default function PriceTable() {

    jQuery(document).ready(function(){
        //hide the subtle gradient layer (.pricing-list > li::after) when pricing table has been scrolled to the end (mobile version only)
        function checkScrolling(tables){
            tables.each(function(){
                var table= $(this),
                    totalTableWidth = parseInt(table.children('.pricing-features').width()),
                     tableViewport = parseInt(table.width());
                if( table.scrollLeft() >= totalTableWidth - tableViewport -1 ) {
                    table.parent('li').addClass('is-ended');
                } else {
                    table.parent('li').removeClass('is-ended');
                }
            });
        }



        checkScrolling($('.pricing-body'));
        $(window).on('resize', function(){
            window.requestAnimationFrame(function(){checkScrolling($('.pricing-body'))});
        });
        $('.pricing-body').on('scroll', function(){ 
            var selected = $(this);
            window.requestAnimationFrame(function(){checkScrolling(selected)});
        });
    

    
        //switch from monthly to annual pricing tables
        bouncy_filter($('.pricing-container'));
    
        function bouncy_filter(container) {
            container.each(function(){
                var pricing_table = $(this);
                var filter_list_container = pricing_table.children('.pricing-switcher'),
                    filter_radios = filter_list_container.find('input[type="radio"]'),
                    pricing_table_wrapper = pricing_table.find('.pricing-wrapper');
    
                //store pricing table items
                var table_elements = {};
                filter_radios.each(function(){
                    var filter_type = $(this).val();
                    table_elements[filter_type] = pricing_table_wrapper.find('li[data-type="'+filter_type+'"]');
                });
    
                //detect input change event
                filter_radios.on('change', function(event){
                    event.preventDefault();
                    //detect which radio input item was checked
                    var selected_filter = $(event.target).val();
    
                    //give higher z-index to the pricing table items selected by the radio input
                    show_selected_items(table_elements[selected_filter]);
    
                    //rotate each pricing-wrapper 
                    //at the end of the animation hide the not-selected pricing tables and rotate back the .pricing-wrapper
                    
                    if( !Modernizr.cssanimations ) {
                        hide_not_selected_items(table_elements, selected_filter);
                        pricing_table_wrapper.removeClass('is-switched');
                    } else {
                        pricing_table_wrapper.addClass('is-switched').eq(0).one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {		
                            hide_not_selected_items(table_elements, selected_filter);
                            pricing_table_wrapper.removeClass('is-switched');
                            //change rotation direction if .pricing-list has the .bounce-invert class
                            if(pricing_table.find('.pricing-list').hasClass('bounce-invert')) pricing_table_wrapper.toggleClass('reverse-animation');
                        });
                    }
                });
            });
        }
        function show_selected_items(selected_elements) {
            selected_elements.addClass('is-selected');
        }
    
        function hide_not_selected_items(table_containers, filter) {
            $.each(table_containers, function(key, value){
                  if ( key != filter ) {	
                    $(this).removeClass('is-visible is-selected').addClass('is-hidden');
    
                } else {
                    $(this).addClass('is-visible').removeClass('is-hidden is-selected');
                }
            });
        }
    });






  return (
    <>
        <div className='everything'>
            <div className="pricing-container">
                <div className="pricing-switcher">
                    <p className="fieldset" >
                        <input type="radio" name="duration-1" value="monthly" id="monthly-1" checked />
                        <label htmlFor="monthly-1">Monthly</label>
                        <input type="radio" name="duration-1" value="yearly" id="yearly-1" />
                        <label htmlFor="yearly-1">Yearly</label>
                        <span className="switch"></span>
                    </p>
                </div>
                <ul className="pricing-list bounce-invert">
                    <li>
                        <ul className="pricing-wrapper">
                            <li data-type="monthly" className="is-visible">
                                <header className="pricing-header">
                                    <h2>Basic</h2>
                                    <div className="price">
                                        <span className="currency">$</span>
                                        <span className="value">24.99</span>
                                        <span className="duration">mo</span>
                                    </div>
                                </header>
                                <div className="pricing-body">
                                    <ul className="pricing-features">
                                        <li><em>1</em> Monthly Meet</li>
                                        <li>Acsess to a dietian</li>
                                        <li>Acsess to a trainer</li>
                                        <li><em>90</em> preplanned meals a month</li>
                                        <li><em>24/7</em> Support</li>
                                    </ul>
                                </div>
                                <footer className="pricing-footer">
                                    <a className="select" href="#">Sign Up</a>
                                </footer>
                            </li>
                            <li data-type="yearly" className="is-hidden">
                                <header className="pricing-header">
                                    <h2>Basic</h2>
                                    <div className="price">
                                        <span className="currency">$</span>
                                        <span className="value">279.99</span>
                                        <span className="duration">yr</span>
                                    </div>
                                </header>
                                <div className="pricing-body">
                                    <ul className="pricing-features">
                                    <li><em>1</em> Monthly Meet</li>
                                        <li>Acsess to a dietian</li>
                                        <li>Acsess to a trainer</li>
                                        <li><em>90</em> preplanned meals a month</li>
                                        <li><em>24/7</em> Support</li>
                                    </ul>
                                </div>
                                <footer className="pricing-footer">
                                    <a className="select" href="#">Sign Up</a>
                                </footer>
                            </li>
                        </ul>
                    </li>
                    <li className="exclusive">
                        <ul className="pricing-wrapper">
                            <li data-type="monthly" className="is-visible">
                                <header className="pricing-header">
                                    <h2>Exclusive</h2>
                                    <div className="price">
                                        <span className="currency">$</span>
                                        <span className="value">29.99</span>
                                        <span className="duration">mo</span>
                                    </div>
                                </header>
                                <div className="pricing-body">
                                    <ul className="pricing-features">
                                        <li><em>1</em> Monthly Meet</li>
                                        <li>Acsess to a dietian</li>
                                        <li>Acsess to a trainer</li>
                                        <li>Acsess to a nutritionist</li>
                                        <li>Acsess to a kinesiologist</li>
                                        <li><em>90</em> preplanned meals a month</li>
                                        <li><em>24/7</em> Support</li>
                                    </ul>
                                </div>
                                <footer className="pricing-footer">
                                    <a className="select" href="#">Sign Up</a>
                                </footer>
                            </li>
                            <li data-type="yearly" className="is-hidden">
                                <header className="pricing-header">
                                    <h2>Exclusive</h2>
                                    <div className="price">
                                        <span className="currency">$</span>
                                        <span className="value">349.99</span>
                                        <span className="duration">yr</span>
                                    </div>
                                </header>
                                <div className="pricing-body">
                                    <ul className="pricing-features">
                                        <li><em>1</em> Monthly Meet</li>
                                        <li>Acsess to a dietian</li>
                                        <li>Acsess to a trainer</li>
                                        <li>Acsess to a nutritionist</li>
                                        <li>Acsess to a kinesiologist</li>
                                        <li><em>90</em> preplanned meals a month</li>
                                        <li><em>24/7</em> Support</li>
                                    </ul>
                                </div>
                                <footer className="pricing-footer">
                                    <a className="select" href="#">Sign Up</a>
                                </footer>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul className="pricing-wrapper">
                            <li data-type="monthly" className="is-visible">
                                <header className="pricing-header">
                                    <h2>Pro</h2>
                                    <div className="price">
                                        <span className="currency">$</span>
                                        <span className="value">59.99</span>
                                        <span className="duration">mo</span>
                                    </div>
                                </header>
                                <div className="pricing-body">
                                    <ul className="pricing-features">
                                        <li><em>2</em> Monthly Meets</li>
                                        <li>Acsess to a dietian</li>
                                        <li>Acsess to a trainer</li>
                                        <li>Acsess to a nutritionist</li>
                                        <li>Acsess to a kinesiologist</li>
                                        <li><em>90</em> preplanned meals a month</li>
                                        <li>Chat With Your Team</li>
                                        <li><em>24/7</em> Support</li>
                                    </ul>
                                </div>
                                <footer className="pricing-footer">
                                    <a className="select" href="#">Sign Up</a>
                                </footer>
                            </li>
                            <li data-type="yearly" className="is-hidden">
                                <header className="pricing-header">
                                    <h2>Pro</h2>
                                    <div className="price">
                                        <span className="currency">$</span>
                                        <span className="value">709.99</span>
                                        <span className="duration">yr</span>
                                    </div>
                                </header>
                                <div className="pricing-body">
                                    <ul className="pricing-features">
                                    <li><em>2</em> Monthly Meets</li>
                                        <li>Acsess to a dietian</li>
                                        <li>Acsess to a trainer</li>
                                        <li>Acsess to a nutritionist</li>
                                        <li>Acsess to a kinesiologist</li>
                                        <li><em>90</em> preplanned meals a month</li>
                                        <li>Chat With Your Team</li>
                                        <li><em>24/7</em> Support</li>
                                    </ul>
                                </div>
                                <footer className="pricing-footer">
                                    <a className="select" href="#">Sign Up</a>
                                </footer>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}
