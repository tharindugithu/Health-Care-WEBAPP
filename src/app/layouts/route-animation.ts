import { transition, trigger, style, query,group,animateChild,animate,keyframes } from '@angular/animations';


export const fader=
         trigger('routeAnime',[
           transition('*<=>*',[
                query(':enter,:leave',[
                     style({
                         position:'absolute',
                         left:0,
                         width:'100%',
                         opacity:0,
                         transform:'scale(0) translateY(100%)',
                     }), 
                ]),
                query(':enter',[
                    animate('600ms ease',
                    style({ opacity:1,transform:'scale(1) translateY(0)'}
                    ))
                ])  
           ]),
         ]);
export const fadein=
            trigger('fadein',[
                transition('void=>*',[
                    style({opacity:0,}),
                    animate(500,)
                ])
            ])         
