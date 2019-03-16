import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
    selector: 'pricing-cmp',
    templateUrl: './pricing.component.html'
})

export class PricingComponent implements OnInit{
    test : Date = new Date();

    checkFullPageBackgroundImage(){
        var $page = $('.full-page');
        var image_src = $page.data('image');

        if(image_src !== undefined){
            var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>'
            $page.append(image_container);
        }
    };
    ngOnInit(){
        this.checkFullPageBackgroundImage();
    }
}
