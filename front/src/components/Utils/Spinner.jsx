const Spinner = () => {
    return (
        <div className="w-100vw bg-white rounded-2xl text-center py-40 px-96 mx-10 font-roboto text-gray-500">
        <div class="flex gap-2">
            <div class="w-5 h-5 rounded-full animate-pulse bg-[#00bcd4]"></div>
            <div class="w-5 h-5 rounded-full animate-pulse bg-[#00bcd4]"></div>
            <div class="w-5 h-5 rounded-full animate-pulse bg-[#00bcd4]"></div>
        </div>
            <p className="text-sm text-gray-400 font-roboto">loading...</p>

        </div>
    )
}

export default Spinner;