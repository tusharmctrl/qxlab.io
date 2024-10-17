import { useRouter } from "next/navigation";
import React from "react";

export function BlogTitle(data: any) {
  const router = useRouter();

  const handleClick = (id: string) => {
    router.push(`/blogs/${id}`);
  };
  return (
    <>
      <div className="mt-24 p-5 pt-10 md:pt-14">
        <div className="container">
          <div className="space-y-4">
            <h2 className="text-center text-4xl font-semibold text-white md:text-6xl xl:text-7xl">{data.title}</h2>
          </div>
        </div>
      </div>
      {data?.blogs.length > 0 && (
        <div className="p-5 py-5 md:py-8 lg:py-12">
          <div className="container">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
              {data?.blogs.map((blog: any, index: number) => (
                <div className="cursor-pointer space-y-4 rounded-2xl bg-white p-5" onClick={() => handleClick(blog.documentId)}>
                  <div className="my-2 flex items-center gap-3">
                    <p className="text-xs text-hex-black">{blog?.author?.name}</p>
                    <img src="/images/dots.svg" className="w-2" alt="Dots" />
                    <p className="text-xs text-hex-black">{blog.date}</p>
                  </div>
                  <p className="block text-base font-semibold leading-7 text-indigo-black md:text-xl">{blog.title}</p>
                  <p className="block text-xs font-light leading-1.8em tracking-wider text-indigo-black">{blog.blog_content.slice(0, 200)}...</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export function BlogLinks(data: any) {
  return (
    <>
      <div className="p-5 lg:py-8">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {data.social_media_name.map((media: any, index: number) => (
              <div
                key={index}
                className="flex items-stretch overflow-hidden rounded-3xl bg-facian-blue text-sm font-semibold text-white transition-all duration-500 hover:bg-celtic-blue md:text-base"
              >
                <span className="flex items-center bg-white/10 px-4 py-3 align-middle">
                  <img src="/images/facebook-alt.svg" className="w-4" alt="facebook" />
                </span>
                <span className="px-4 py-3">{media.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
