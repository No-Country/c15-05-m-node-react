const Spinner = () => {
    return (
        <div class="flex gap-2">
            <div class="w-5 h-5 rounded-full animate-pulse bg-[#00bcd4]"></div>
            <div class="w-5 h-5 rounded-full animate-pulse bg-[#00bcd4]"></div>
            <div class="w-5 h-5 rounded-full animate-pulse bg-[#00bcd4]"></div>
            <p className="text-sm text-gray-400 font-roboto">loading...</p>
        </div>
    )
}

export default Spinner;