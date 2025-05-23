import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccommodationDetailService } from '../../services/user/accommodation-detail.service';
import { GalleriaModule } from 'primeng/galleria';
import { HotelService } from '../../services/user/hotel.service';

@Component({
    selector: 'app-image-list-modal',
    imports: [GalleriaModule],
    templateUrl: './image-list-modal.component.html',
    styleUrl: './image-list-modal.component.scss'
})
export class ImageListModalComponent implements OnInit {
    images: any[] = [];
    activeIndex: number = 0;
    @Input() accommodationName: string = '';
    @Input() show: boolean = false;

    @Output() close = new EventEmitter<void>();

    constructor(private accommodationDetailService: AccommodationDetailService, private hotelService: HotelService) { }

    ngOnInit() {
        // this.getAccommodationImagesByName(this.accommodationName);
        this.getHotelImagesByName(this.accommodationName);
        document.body.style.overflow = 'hidden'; // chặn scroll nền
    }

    // getAccommodationImagesByName(name: string) {
    //     this.accommodationDetailService.getAccommodationImagesByName(name).subscribe((data: any) => {
    //         this.images = data;
    //     })
    // }

    getHotelImagesByName(name: string) {
        this.hotelService.getHotelImagesByName(name).subscribe((images: any) => {
            this.images = images;
        })
    }

    handleClose(): void {
        document.body.style.overflow = 'auto'; // khôi phục scroll
        this.close.emit();
    }

    // Responsive của Galleria
    responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '950px',
            numVisible: 4
        },
        {
            breakpoint: '700px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 2
        },
        {
            breakpoint: '390px',
            numVisible: 1
        }
    ];
}
