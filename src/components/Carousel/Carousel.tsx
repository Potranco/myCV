import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "../ui/carousel";

type props = {
    align?: "vertical" | "horizontal"
    data?: Array<any>
    className?: string
}

const CarouselComponent = ({align = "horizontal", data = [], className = ''}:props) => {
    return (
        <Carousel
            orientation={align}
            className={className}
        >
            <CarouselContent className="gap-2 items-center">
                {data.map((item, index) => (
                    <CarouselItem
                        className=""
                        key={`${index}-experience`}
                    >
                        {item}
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

export default CarouselComponent