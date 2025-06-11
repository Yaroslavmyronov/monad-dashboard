function GasUsedToday() {
  const imageUrls = [
    'https://ipfs.io/ipfs/bafybeifca7smm5hijxuwdsrzdphz4ktxlotmho4bujxz4lbeoj7m55tkte',
    'https://ipfs.io/ipfs/bafkreics3licfl4fgkjp4fdrcumc5ri665ea73pcsjfbd3g4shofvgroim',
    'https://bafybeiarr3b23a7ic72iqlyvlhte54enopgn6sjhm4mtn4drpiwtw5vhf4.ipfs.w3s.link/molandaks_cover.jpg',
    'https://bafybeic7qtumkpusmadwyhrhd6ce3ilj6fcumemf7dgyflqhwb2qyy6vwm.ipfs.w3s.link/purple_frens_cover.png',
    'https://talentum.id/images/nft/Col.jpg',
    'https://ipfs.io/ipfs/bafybeic4tiajbsysbk3veq6vs4izbeg4g3el4dgojo3ukjhm7wya622u6a',
  ];
  return (
    <div className="bg-[#1f1f21] p-4">
      <div className="flex flex-col h-full">
        <div className="flex">
          <div className="">Gas Used Today</div>
          <div className="relative inline-block w-[35px] aspect-square bg-sand rounded-full cursor-pointer ml-auto">
            <div className="absolute top-1/2 left-1/2 h-[16px] border-r-2 border-midnight rotate-45 -translate-x-1/2 -translate-y-1/2 origin-center"></div>
            <div className="absolute top-1/2 left-1/2 w-[10px] h-[10px] border-2 border-midnight border-b-0 border-l-0 -translate-x-[30%] -translate-y-[70%] origin-center"></div>
          </div>
        </div>
        <div className="flex justify-between items-end mt-auto">
          <div className="text-[64px] tracking-[-6px] leading-none">6.9</div>
          <div className="flex items-center gap-1">
            <div className="text-[20px]">/</div>
            <div className="text-[14px]">15h</div>
          </div>
        </div>
        <div className="w-full h-[2px] bg-white my-3 opacity-10"></div>
        <div className="flex justify-between flex-col">
          <div className="mb-3">total</div>
          <div className="grid grid-cols-3 gap-2">
            {imageUrls.map((url, index) => (
              <img className="w-full aspect-square" key={index} src={url} alt={`NFT ${index + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GasUsedToday;
