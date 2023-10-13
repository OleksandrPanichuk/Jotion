    import {Footer} from "@/app/(marketing)/_components/footer";
    import {Heading} from '@/app/(marketing)/_components/heading'
    import {Heroes} from '@/app/(marketing)/_components/heroes'
const Page = () => {
    return (
        <div className="min-h-full flex flex-col dark:bg-[#1F1F1F]">
            <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
            <Heading />
                <Heroes />
            </div>
            <Footer/>
        </div>
    );
};

export default Page;
