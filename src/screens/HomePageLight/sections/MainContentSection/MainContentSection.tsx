import React from "react";
import { useTheme } from "../../../../theme/ThemeProvider";

export const MainContentSection = (): JSX.Element => {
  const { theme } = useTheme();
  return (
    <div className="flex flex-wrap items-start gap-7 p-7 flex-1 dark:text-[#e5e7eb]">
      <div className="flex flex-wrap items-start gap-[28px_28px] relative flex-1 grow">
        <div className="flex gap-8">
          <div className="min-w-[200px] gap-2 p-6 flex-1 grow bg-[#e3f5ff] dark:bg-[#e3f5ff] flex flex-col items-start relative rounded-2xl">
            <div className="flex-wrap items-center gap-[8px_8px] flex-[0_0_auto] flex relative self-stretch w-full rounded-lg">
              <div className="flex flex-col items-start justify-center relative flex-1 grow rounded-lg">
                <div className="relative self-stretch mt-[-1.00px] font-14-semibold font-[number:var(--14-semibold-font-weight)] text-black-100 dark:text-[#1c1c1c] text-[length:var(--14-semibold-font-size)] tracking-[var(--14-semibold-letter-spacing)] leading-[var(--14-semibold-line-height)] [font-style:var(--14-semibold-font-style)]">
                  Customers
                </div>
              </div>
            </div>

            <div className="flex-wrap items-center justify-between gap-[8px_8px] flex-[0_0_auto] flex relative self-stretch w-full rounded-lg">
              <div className="inline-flex flex-col items-start justify-center relative flex-[0_0_auto] rounded-lg">
                <div className="relative self-stretch mt-[-1.00px] font-24-semibold font-[number:var(--24-semibold-font-weight)] text-black-100 dark:text-[#1c1c1c] text-[length:var(--24-semibold-font-size)] tracking-[var(--24-semibold-letter-spacing)] leading-[var(--24-semibold-line-height)] [font-style:var(--24-semibold-font-style)]">
                  3,781
                </div>
              </div>

              <div className="inline-flex items-center gap-[4px_4px] flex-[0_0_auto] flex-wrap relative rounded-lg">
                <div className="inline-flex flex-col items-start justify-center relative flex-[0_0_auto] rounded-lg">
                  <div className="relative self-stretch mt-[-1.00px] font-12-regular font-[number:var(--12-regular-font-weight)] text-black-100 dark:text-[#1c1c1c] text-[length:var(--12-regular-font-size)] tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] [font-style:var(--12-regular-font-style)]">
                    +11.01%
                  </div>
                </div>

                <div className="inline-flex justify-center flex-[0_0_auto] rounded-lg items-center relative">
                  <img
                    className="relative w-4 h-4 dark:invert"
                    alt="Arrow rise"
                    src="/arrowrise.svg"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col min-w-[200px] items-start gap-2 p-6 relative flex-1 grow bg-[#f7f9fb] dark:bg-white/5 rounded-2xl">
            <div className="flex-wrap items-center gap-[8px_8px] flex-[0_0_auto] flex relative self-stretch w-full rounded-lg">
              <div className="flex flex-col items-start justify-center relative flex-1 grow rounded-lg">
                <div className="relative self-stretch mt-[-1.00px] font-14-semibold font-[number:var(--14-semibold-font-weight)] text-[#1c1c1c] dark:text-[#e5e7eb] text-[length:var(--14-semibold-font-size)] tracking-[var(--14-semibold-letter-spacing)] leading-[var(--14-semibold-line-height)] [font-style:var(--14-semibold-font-style)]">
                  Orders
                </div>
              </div>
            </div>

            <div className="flex-wrap items-center justify-between gap-[8px_8px] flex-[0_0_auto] flex relative self-stretch w-full rounded-lg">
              <div className="inline-flex flex-col items-start justify-center relative flex-[0_0_auto] rounded-lg">
                <div className="relative self-stretch mt-[-1.00px] font-24-semibold font-[number:var(--24-semibold-font-weight)] text-[#1c1c1c] dark:text-[#e5e7eb] text-[length:var(--24-semibold-font-size)] tracking-[var(--24-semibold-letter-spacing)] leading-[var(--24-semibold-line-height)] [font-style:var(--24-semibold-font-style)]">
                  1,219
                </div>
              </div>

              <div className="inline-flex items-center gap-[4px_4px] flex-[0_0_auto] flex-wrap relative rounded-lg">
                <div className="inline-flex flex-col items-start justify-center relative flex-[0_0_auto] rounded-lg">
                  <div className="relative self-stretch mt-[-1.00px] font-12-regular font-[number:var(--12-regular-font-weight)] text-[#1c1c1c] dark:text-[#9ca3af] text-[length:var(--12-regular-font-size)] tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] [font-style:var(--12-regular-font-style)]">
                    -0.03%
                  </div>
                </div>

                <div className="inline-flex justify-center flex-[0_0_auto] rounded-lg items-center relative">
                  <img
                    className="relative w-4 h-4 dark:invert"
                    alt="Arrow fall"
                    src="/arrowfall.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          <div className="flex flex-col min-w-[200px] items-start gap-2 p-6 relative flex-1 grow bg-[#f7f9fb] dark:bg-white/5 rounded-2xl">
            <div className="flex-wrap items-center gap-[8px_8px] flex-[0_0_auto] flex relative self-stretch w-full rounded-lg">
              <div className="flex flex-col items-start justify-center relative flex-1 grow rounded-lg">
                <div className="relative self-stretch mt-[-1.00px] font-14-semibold font-[number:var(--14-semibold-font-weight)] text-[#1c1c1c] dark:text-[#e5e7eb] text-[length:var(--14-semibold-font-size)] tracking-[var(--14-semibold-letter-spacing)] leading-[var(--14-semibold-line-height)] [font-style:var(--14-semibold-font-style)]">
                  Revenue
                </div>
              </div>
            </div>

            <div className="flex-wrap items-center justify-between gap-[8px_8px] flex-[0_0_auto] flex relative self-stretch w-full rounded-lg">
              <div className="inline-flex flex-col items-start justify-center relative flex-[0_0_auto] rounded-lg">
                <div className="relative self-stretch mt-[-1.00px] font-24-semibold font-[number:var(--24-semibold-font-weight)] text-[#1c1c1c] dark:text-[#e5e7eb] text-[length:var(--24-semibold-font-size)] tracking-[var(--24-semibold-letter-spacing)] leading-[var(--24-semibold-line-height)] [font-style:var(--24-semibold-font-style)]">
                  $695
                </div>
              </div>

              <div className="inline-flex items-center gap-[4px_4px] flex-[0_0_auto] flex-wrap relative rounded-lg">
                <div className="inline-flex flex-col items-start justify-center relative flex-[0_0_auto] rounded-lg">
                  <div className="relative self-stretch mt-[-1.00px] font-12-regular font-[number:var(--12-regular-font-weight)] text-[#1c1c1c] dark:text-[#9ca3af] text-[length:var(--12-regular-font-size)] tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] [font-style:var(--12-regular-font-style)]">
                    +15.03%
                  </div>
                </div>

                <div className="inline-flex justify-center flex-[0_0_auto] rounded-lg items-center relative">
                  <img
                    className="relative w-4 h-4 dark:invert"
                    alt="Arrow rise"
                    src="/arrowrise.svg"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="min-w-[200px] gap-2 p-6 flex-1 grow bg-[#e5ecf6] dark:bg-[#e5ecf6] flex flex-col items-start relative rounded-2xl">
            <div className="flex-wrap items-center gap-[8px_8px] flex-[0_0_auto] flex relative self-stretch w-full rounded-lg">
              <div className="flex flex-col items-start justify-center relative flex-1 grow rounded-lg">
                <div className="relative self-stretch mt-[-1.00px] font-14-semibold font-[number:var(--14-semibold-font-weight)] text-black-100 dark:text-[#1c1c1c] text-[length:var(--14-semibold-font-size)] tracking-[var(--14-semibold-letter-spacing)] leading-[var(--14-semibold-line-height)] [font-style:var(--14-semibold-font-style)]">
                  Growth
                </div>
              </div>
            </div>

            <div className="flex-wrap items-center justify-between gap-[8px_8px] flex-[0_0_auto] flex relative self-stretch w-full rounded-lg">
              <div className="inline-flex flex-col items-start justify-center relative flex-[0_0_auto] rounded-lg">
                <div className="relative self-stretch mt-[-1.00px] font-24-semibold font-[number:var(--24-semibold-font-weight)] text-black-100 dark:text-[#1c1c1c] text-[length:var(--24-semibold-font-size)] tracking-[var(--24-semibold-letter-spacing)] leading-[var(--24-semibold-line-height)] [font-style:var(--24-semibold-font-style)]">
                  30.1%
                </div>
              </div>

              <div className="inline-flex items-center gap-[4px_4px] flex-[0_0_auto] flex-wrap relative rounded-lg">
                <div className="inline-flex flex-col items-start justify-center relative flex-[0_0_auto] rounded-lg">
                  <div className="relative self-stretch mt-[-1.00px] font-12-regular font-[number:var(--12-regular-font-weight)] text-black-100 dark:text-[#1c1c1c] text-[length:var(--12-regular-font-size)] tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] [font-style:var(--12-regular-font-style)]">
                    +6.08%
                  </div>
                </div>

                <div className="inline-flex justify-center flex-[0_0_auto] rounded-lg items-center relative">
                  <img
                    className="relative w-4 h-4 dark:invert"
                    alt="Arrow rise"
                    src="/arrowrise.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col min-w-[400px] h-[252px] items-start gap-4 p-6 relative flex-1 grow bg-[#f7f9fb] dark:bg-white/5 rounded-2xl overflow-hidden">
        <div className="flex flex-col items-start justify-center relative self-stretch w-full flex-[0_0_auto] rounded-lg">
          <div className="relative self-stretch mt-[-1.00px] font-14-semibold font-[number:var(--14-semibold-font-weight)] text-[#1c1c1c] dark:text-[#e5e7eb] text-[length:var(--14-semibold-font-size)] tracking-[var(--14-semibold-letter-spacing)] leading-[var(--14-semibold-line-height)] [font-style:var(--14-semibold-font-style)]">
            Projections vs Actuals
          </div>
        </div>

        <div className="flex items-start gap-4 relative flex-1 self-stretch w-full grow">
          <div className="inline-flex flex-col items-end justify-between relative self-stretch flex-[0_0_auto]">
            <div className="relative flex-1 self-stretch mt-[-1.00px] font-12-regular font-[number:var(--12-regular-font-weight)] text-[#1c1c1c66] dark:text-[#9ca3af] text-[length:var(--12-regular-font-size)] text-right tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] [font-style:var(--12-regular-font-style)]">
              30M
            </div>

            <div className="relative flex-1 self-stretch font-12-regular font-[number:var(--12-regular-font-weight)] text-[#1c1c1c66] dark:text-[#9ca3af] text-[length:var(--12-regular-font-size)] text-right tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] [font-style:var(--12-regular-font-style)]">
              20M
            </div>

            <div className="relative flex-1 self-stretch font-12-regular font-[number:var(--12-regular-font-weight)] text-[#1c1c1c66] dark:text-[#9ca3af] text-[length:var(--12-regular-font-size)] text-right tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] [font-style:var(--12-regular-font-style)]">
              10M
            </div>

            <div className="relative flex-1 self-stretch font-12-regular font-[number:var(--12-regular-font-weight)] text-[#1c1c1c66] dark:text-[#9ca3af] text-[length:var(--12-regular-font-size)] text-right tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] [font-style:var(--12-regular-font-style)]">
              0
            </div>
          </div>

          <div className="flex flex-col items-start relative flex-1 self-stretch grow">
            <div className="flex flex-col items-start justify-between pt-4 pb-7 px-0 relative flex-1 self-stretch w-full grow">
              <img
                className="relative self-stretch w-full h-px mt-[-1.00px] object-cover"
                alt="Element"
                src="/1-1.svg"
              />

              <img
                className="relative self-stretch w-full h-px object-cover"
                alt="Element"
                src="/1-1.svg"
              />

              <img
                className="relative self-stretch w-full h-px object-cover"
                alt="Element"
                src="/1-1.svg"
              />

              <img
                className="relative self-stretch w-full h-px object-cover"
                alt="Element"
                src="/1-1.svg"
              />
            </div>

            <div className="flex w-full items-center absolute left-0 bottom-0">
              <div className="relative flex items-center justify-center flex-1 mt-[-1.00px] font-12-regular font-[number:var(--12-regular-font-weight)] text-[#1c1c1c66] dark:text-[#9ca3af] text-[length:var(--12-regular-font-size)] text-center tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] [font-style:var(--12-regular-font-style)]">
                Jan
              </div>

              <div className="relative flex items-center justify-center flex-1 mt-[-1.00px] font-12-regular font-[number:var(--12-regular-font-weight)] text-[#1c1c1c66] dark:text-[#9ca3af] text-[length:var(--12-regular-font-size)] text-center tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] [font-style:var(--12-regular-font-style)]">
                Feb
              </div>

              <div className="relative flex items-center justify-center flex-1 mt-[-1.00px] font-12-regular font-[number:var(--12-regular-font-weight)] text-[#1c1c1c66] dark:text-[#9ca3af] text-[length:var(--12-regular-font-size)] text-center tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] [font-style:var(--12-regular-font-style)]">
                Mar
              </div>

              <div className="relative flex items-center justify-center flex-1 mt-[-1.00px] font-12-regular font-[number:var(--12-regular-font-weight)] text-[#1c1c1c66] dark:text-[#9ca3af] text-[length:var(--12-regular-font-size)] text-center tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] [font-style:var(--12-regular-font-style)]">
                Apr
              </div>

              <div className="relative flex items-center justify-center flex-1 mt-[-1.00px] font-12-regular font-[number:var(--12-regular-font-weight)] text-[#1c1c1c66] dark:text-[#9ca3af] text-[length:var(--12-regular-font-size)] text-center tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] [font-style:var(--12-regular-font-style)]">
                May
              </div>

              <div className="relative flex items-center justify-center flex-1 mt-[-1.00px] font-12-regular font-[number:var(--12-regular-font-weight)] text-[#1c1c1c66] dark:text-[#9ca3af] text-[length:var(--12-regular-font-size)] text-center tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] [font-style:var(--12-regular-font-style)]">
                Jun
              </div>
            </div>

            <div className="flex w-full h-full items-end justify-between pt-0 pb-7 px-0 absolute top-0 left-0">
              <div className="flex flex-col items-center justify-end pt-[50px] pb-0 px-4 relative flex-1 self-stretch grow">
                <div className="relative flex-1 self-stretch w-full grow">
                  <div className="absolute h-full top-0 left-[calc(50.00%_-_10px)] w-5 bg-[#a8c5da] rounded-[4px_4px_0px_0px] opacity-50" />

                  <div className="absolute h-[80.00%] top-[20.00%] left-[calc(50.00%_-_10px)] w-5 bg-[#a8c5da]" />
                </div>
              </div>

              <div className="flex flex-col items-center justify-end pt-[30px] pb-0 px-4 relative flex-1 self-stretch grow">
                <div className="relative flex-1 self-stretch w-full grow">
                  <div className="absolute h-full top-0 left-[calc(50.00%_-_10px)] w-5 bg-[#a8c5da] rounded-[4px_4px_0px_0px] opacity-50" />

                  <div className="absolute h-[80.00%] top-[20.00%] left-[calc(50.00%_-_10px)] w-5 bg-[#a8c5da]" />
                </div>
              </div>

              <div className="flex flex-col items-center justify-end pt-[45px] pb-0 px-4 relative flex-1 self-stretch grow">
                <div className="relative flex-1 self-stretch w-full grow">
                  <div className="absolute h-full top-0 left-[calc(50.00%_-_10px)] w-5 bg-[#a8c5da] rounded-[4px_4px_0px_0px] opacity-50" />

                  <div className="absolute h-[80.00%] top-[20.00%] left-[calc(50.00%_-_10px)] w-5 bg-[#a8c5da]" />
                </div>
              </div>

              <div className="flex flex-col items-center justify-end pt-5 pb-0 px-4 relative flex-1 self-stretch grow">
                <div className="relative flex-1 self-stretch w-full grow">
                  <div className="absolute h-full top-0 left-[calc(50.00%_-_10px)] w-5 bg-[#a8c5da] rounded-[4px_4px_0px_0px] opacity-50" />

                  <div className="absolute h-[80.00%] top-[20.00%] left-[calc(50.00%_-_10px)] w-5 bg-[#a8c5da]" />
                </div>
              </div>

              <div className="flex-col justify-end pt-[60px] pb-0 px-4 self-stretch grow flex items-center relative flex-1">
                <div className="relative flex-1 self-stretch w-full grow">
                  <div className="absolute h-full top-0 left-[calc(50.00%_-_10px)] w-5 bg-[#a8c5da] rounded-[4px_4px_0px_0px] opacity-50" />

                  <div className="absolute h-[80.00%] top-[20.00%] left-[calc(50.00%_-_10px)] w-5 bg-[#a8c5da]" />
                </div>
              </div>

              <div className="flex flex-col items-center justify-end pt-[30px] pb-0 px-4 relative flex-1 self-stretch grow">
                <div className="relative flex-1 self-stretch w-full grow">
                  <div className="absolute h-full top-0 left-[calc(50.00%_-_10px)] w-5 bg-[#a8c5da] rounded-[4px_4px_0px_0px] opacity-50" />

                  <div className="absolute h-[80.00%] top-[20.00%] left-[calc(50.00%_-_10px)] w-5 bg-[#a8c5da]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="min-w-[662px] h-[318px] items-start gap-4 flex flex-col p-6 relative flex-1 grow bg-[#f7f9fb] dark:bg-white/5 rounded-2xl overflow-hidden">
        <div className="inline-flex flex-wrap gap-[16px_16px] items-center relative flex-[0_0_auto] rounded-lg">
          <div className="inline-flex flex-col items-start justify-center relative flex-[0_0_auto] rounded-lg">
            <div className="relative self-stretch mt-[-1.00px] font-14-semibold font-[number:var(--14-semibold-font-weight)] text-[#1c1c1c] dark:text-[#e5e7eb] text-[length:var(--14-semibold-font-size)] tracking-[var(--14-semibold-letter-spacing)] leading-[var(--14-semibold-line-height)] [font-style:var(--14-semibold-font-style)]">
              Revenue
            </div>
          </div>

          <div className="inline-flex flex-col items-start justify-center relative flex-[0_0_auto] rounded-lg">
            <div className="relative self-stretch mt-[-1.00px] font-14-regular font-[number:var(--14-regular-font-weight)] text-[#1c1c1c33] dark:text-[#6b7280] text-[length:var(--14-regular-font-size)] tracking-[var(--14-regular-letter-spacing)] leading-[var(--14-regular-line-height)] [font-style:var(--14-regular-font-style)]">
              |
            </div>
          </div>

          <div className="inline-flex pl-1 pr-2 py-0.5 items-center relative flex-[0_0_auto] rounded-lg">
            <img className="relative w-4 h-4" alt="Dot" src="/dot.svg" />

            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#1c1c1c] dark:text-[#e5e7eb] text-xs tracking-[0] leading-3">
              <span className="leading-[18px]">Current Week&nbsp;&nbsp;</span>

              <span className="font-semibold leading-[18px]">$58,211</span>
            </div>
          </div>

          <div className="inline-flex pl-1 pr-2 py-0.5 items-center relative flex-[0_0_auto] rounded-lg">
            <img className="relative w-4 h-4" alt="Dot" src="/dot.svg" />

            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#1c1c1c] dark:text-[#e5e7eb] text-xs tracking-[0] leading-3">
              <span className="leading-[18px]">Previous Week&nbsp;&nbsp;</span>

              <span className="font-semibold leading-[18px]">$68,768</span>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-4 relative flex-1 self-stretch w-full grow">
          <div className="inline-flex flex-col items-end justify-between relative self-stretch flex-[0_0_auto]">
            <div className="relative flex-1 self-stretch mt-[-1.00px] font-12-regular font-[number:var(--12-regular-font-weight)] text-[#1c1c1c66] dark:text-[#9ca3af] text-[length:var(--12-regular-font-size)] text-right tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] [font-style:var(--12-regular-font-style)]">
              30M
            </div>

            <div className="relative flex-1 self-stretch font-12-regular font-[number:var(--12-regular-font-weight)] text-[#1c1c1c66] dark:text-[#9ca3af] text-[length:var(--12-regular-font-size)] text-right tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] [font-style:var(--12-regular-font-style)]">
              20M
            </div>

            <div className="relative flex-1 self-stretch font-12-regular font-[number:var(--12-regular-font-weight)] text-[#1c1c1c66] dark:text-[#9ca3af] text-[length:var(--12-regular-font-size)] text-right tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] [font-style:var(--12-regular-font-style)]">
              10M
            </div>

            <div className="relative flex-1 self-stretch font-12-regular font-[number:var(--12-regular-font-weight)] text-[#1c1c1c66] dark:text-[#9ca3af] text-[length:var(--12-regular-font-size)] text-right tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] [font-style:var(--12-regular-font-style)]">
              0
            </div>
          </div>

          <div className="flex flex-col items-start relative flex-1 self-stretch grow">
            <div className="flex flex-col items-start justify-between pt-4 pb-7 px-0 relative flex-1 self-stretch w-full grow">
              <img
                className="relative self-stretch w-full h-px mt-[-1.00px] object-cover"
                alt="Element"
                src="/1.svg"
              />

              <img
                className="relative self-stretch w-full h-px object-cover"
                alt="Element"
                src="/1.svg"
              />

              <img
                className="relative self-stretch w-full h-px object-cover"
                alt="Element"
                src="/1.svg"
              />

              <img
                className="relative self-stretch w-full h-px object-cover"
                alt="Element"
                src="/1.svg"
              />
            </div>

            <div className="flex w-full items-center absolute left-0 bottom-0">
              <div className="relative flex items-center justify-center flex-1 mt-[-1.00px] font-12-regular font-[number:var(--12-regular-font-weight)] text-[#1c1c1c66] dark:text-[#9ca3af] text-[length:var(--12-regular-font-size)] text-center tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] [font-style:var(--12-regular-font-style)]">
                Jan
              </div>

              <div className="relative flex items-center justify-center flex-1 mt-[-1.00px] font-12-regular font-[number:var(--12-regular-font-weight)] text-[#1c1c1c66] dark:text-[#9ca3af] text-[length:var(--12-regular-font-size)] text-center tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] [font-style:var(--12-regular-font-style)]">
                Feb
              </div>

              <div className="relative flex items-center justify-center flex-1 mt-[-1.00px] font-12-regular font-[number:var(--12-regular-font-weight)] text-[#1c1c1c66] dark:text-[#9ca3af] text-[length:var(--12-regular-font-size)] text-center tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] [font-style:var(--12-regular-font-style)]">
                Mar
              </div>

              <div className="relative flex items-center justify-center flex-1 mt-[-1.00px] font-12-regular font-[number:var(--12-regular-font-weight)] text-[#1c1c1c66] dark:text-[#9ca3af] text-[length:var(--12-regular-font-size)] text-center tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] [font-style:var(--12-regular-font-style)]">
                Apr
              </div>

              <div className="justify-center mt-[-1.00px] font-12-regular font-[number:var(--12-regular-font-weight)] text-[#1c1c1c66] dark:text-[#9ca3af] text-[length:var(--12-regular-font-size)] text-center tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] flex items-center relative flex-1 [font-style:var(--12-regular-font-style)]">
                May
              </div>

              <div className="relative flex items-center justify-center flex-1 mt-[-1.00px] font-12-regular font-[number:var(--12-regular-font-weight)] text-[#1c1c1c66] dark:text-[#9ca3af] text-[length:var(--12-regular-font-size)] text-center tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] [font-style:var(--12-regular-font-style)]">
                Jun
              </div>
            </div>

            <div className="absolute w-[calc(100%-24px)] h-full top-0 left-3">
              <img
                className="absolute w-full h-[47.27%] top-[20.00%] left-0 dark:hidden"
                alt="Frame"
                src="/frame.svg"
                style={{
                  width: 'calc(100% + 16px)',
                  marginLeft: '-8px',
                  maxWidth: 'none'
                }}
              />
              <img
                className="absolute h-[47.27%] top-[20.00%] left-0 hidden dark:block"
                alt="Frame"
                src="/framed.svg"
                style={{
                  width: 'calc(100% + 16px)',
                  marginLeft: '-8px',
                  maxWidth: 'none'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="min-w-[200px] max-w-[272px] items-start gap-4 flex flex-col p-6 relative flex-1 grow bg-[#f7f9fb] dark:bg-white/5 rounded-2xl overflow-hidden">
        <div className="flex flex-col items-start justify-center relative self-stretch w-full flex-[0_0_auto] rounded-lg">
          <div className="relative self-stretch mt-[-1.00px] font-14-semibold font-[number:var(--14-semibold-font-weight)] text-[#1c1c1c] dark:text-[#e5e7eb] text-[length:var(--14-semibold-font-size)] tracking-[var(--14-semibold-letter-spacing)] leading-[var(--14-semibold-line-height)] [font-style:var(--14-semibold-font-style)]">
            Revenue by Location
          </div>
        </div>

        <div className="relative self-stretch w-full h-[82px]">
          <img
            className="absolute w-full h-full top-[-2.59%] left-[-2.68%]"
            alt="Map"
            src="/map.svg"
          />

          <div className="absolute w-[5.26%] h-[9.76%] top-[31.71%] left-[10.53%] shadow-[0px_2px_2px_#0000001a]">
            <div className="relative w-[74.68%] h-[75.00%] top-[12.50%] left-[12.66%] bg-[#1c1c1c] rounded-[3.03px/3px] border border-solid border-white rotate-180" />
          </div>

          <div className="top-[37.80%] left-[24.34%] absolute w-[5.26%] h-[9.76%] shadow-[0px_2px_2px_#0000001a]">
            <div className="relative w-[74.68%] h-[75.00%] top-[12.50%] left-[12.66%] bg-[#1c1c1c] rounded-[3.03px/3px] border border-solid border-white rotate-180" />
          </div>

          <div className="top-[58.54%] left-[71.71%] absolute w-[5.26%] h-[9.76%] shadow-[0px_2px_2px_#0000001a]">
            <div className="relative w-[74.68%] h-[75.00%] top-[12.50%] left-[12.66%] bg-[#1c1c1c] rounded-[3.03px/3px] border border-solid border-white rotate-180" />
          </div>

          <div className="top-[75.61%] left-[82.89%] absolute w-[5.26%] h-[9.76%] shadow-[0px_2px_2px_#0000001a]">
            <div className="relative w-[74.68%] h-[75.00%] top-[12.50%] left-[12.66%] bg-[#1c1c1c] rounded-[3.03px/3px] border border-solid border-white rotate-180" />
          </div>
        </div>

        <div className="flex-col h-[22px] items-start justify-center flex relative self-stretch w-full rounded-lg">
          <div className="flex flex-wrap h-5 items-center gap-[0px_0px] relative self-stretch w-full rounded-lg">
            <div className="relative flex-1 font-12-regular font-[number:var(--12-regular-font-weight)] text-[#1c1c1c] dark:text-[#e5e7eb] text-[length:var(--12-regular-font-size)] tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] [font-style:var(--12-regular-font-style)]">
              New York
            </div>

            <div className="relative w-fit font-12-regular font-[number:var(--12-regular-font-weight)] text-[#1c1c1c] dark:text-[#e5e7eb] text-[length:var(--12-regular-font-size)] tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] whitespace-nowrap [font-style:var(--12-regular-font-style)]">
              72K
            </div>
          </div>

          <div className="pl-0 pr-10 py-0 flex items-start gap-2 relative flex-1 self-stretch w-full grow rounded-[80px] overflow-hidden bg-[linear-gradient(0deg,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0.2)_100%),linear-gradient(0deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0.4)_100%),linear-gradient(0deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0.4)_100%),linear-gradient(0deg,rgba(168,197,218,1)_0%,rgba(168,197,218,1)_100%)]">
            <div className="relative flex-1 self-stretch grow bg-[#a8c5da] rounded-[80px]" />
          </div>
        </div>

        <div className="flex-col h-[22px] items-start justify-center flex relative self-stretch w-full rounded-lg">
          <div className="flex flex-wrap h-5 items-center gap-[0px_0px] relative self-stretch w-full rounded-lg">
            <div className="relative flex-1 font-12-regular font-[number:var(--12-regular-font-weight)] text-[#1c1c1c] dark:text-[#e5e7eb] text-[length:var(--12-regular-font-size)] tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] [font-style:var(--12-regular-font-style)]">
              San Francisco
            </div>

            <div className="relative w-fit font-12-regular font-[number:var(--12-regular-font-weight)] text-[#1c1c1c] dark:text-[#e5e7eb] text-[length:var(--12-regular-font-size)] tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] whitespace-nowrap [font-style:var(--12-regular-font-style)]">
              39K
            </div>
          </div>

          <div className="pl-0 pr-[90px] py-0 flex items-start gap-2 relative flex-1 self-stretch w-full grow rounded-[80px] overflow-hidden bg-[linear-gradient(0deg,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0.2)_100%),linear-gradient(0deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0.4)_100%),linear-gradient(0deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0.4)_100%),linear-gradient(0deg,rgba(168,197,218,1)_0%,rgba(168,197,218,1)_100%)]">
            <div className="relative flex-1 self-stretch grow bg-[#a8c5da] rounded-[80px]" />
          </div>
        </div>

        <div className="flex-col h-[22px] items-start justify-center flex relative self-stretch w-full rounded-lg">
          <div className="flex flex-wrap h-5 items-center gap-[0px_0px] relative self-stretch w-full rounded-lg">
            <div className="relative flex-1 font-12-regular font-[number:var(--12-regular-font-weight)] text-[#1c1c1c] dark:text-[#e5e7eb] text-[length:var(--12-regular-font-size)] tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] [font-style:var(--12-regular-font-style)]">
              Sydney
            </div>

            <div className="relative w-fit font-12-regular font-[number:var(--12-regular-font-weight)] text-[#1c1c1c] dark:text-[#e5e7eb] text-[length:var(--12-regular-font-size)] tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] whitespace-nowrap [font-style:var(--12-regular-font-style)]">
              25K
            </div>
          </div>

          <div className="pl-0 pr-20 py-0 flex items-start gap-2 relative flex-1 self-stretch w-full grow rounded-[80px] overflow-hidden bg-[linear-gradient(0deg,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0.2)_100%),linear-gradient(0deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0.4)_100%),linear-gradient(0deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0.4)_100%),linear-gradient(0deg,rgba(168,197,218,1)_0%,rgba(168,197,218,1)_100%)]">
            <div className="relative flex-1 self-stretch grow bg-[#a8c5da] rounded-[80px]" />
          </div>
        </div>

        <div className="flex-col h-[22px] items-start justify-center flex relative self-stretch w-full rounded-lg">
          <div className="flex flex-wrap h-5 items-center gap-[0px_0px] relative self-stretch w-full rounded-lg">
            <div className="relative flex-1 font-12-regular font-[number:var(--12-regular-font-weight)] text-[#1c1c1c] dark:text-[#e5e7eb] text-[length:var(--12-regular-font-size)] tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] [font-style:var(--12-regular-font-style)]">
              Singapore
            </div>

            <div className="relative w-fit font-12-regular font-[number:var(--12-regular-font-weight)] text-[#1c1c1c] dark:text-[#e5e7eb] text-[length:var(--12-regular-font-size)] tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] whitespace-nowrap [font-style:var(--12-regular-font-style)]">
              61K
            </div>
          </div>

          <div className="pl-0 pr-[60px] py-0 flex items-start gap-2 relative flex-1 self-stretch w-full grow rounded-[80px] overflow-hidden bg-[linear-gradient(0deg,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0.2)_100%),linear-gradient(0deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0.4)_100%),linear-gradient(0deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0.4)_100%),linear-gradient(0deg,rgba(168,197,218,1)_0%,rgba(168,197,218,1)_100%)]">
            <div className="relative flex-1 self-stretch grow bg-[#a8c5da] rounded-[80px]" />
          </div>
        </div>
      </div>

      <div className="min-w-[662px] items-start gap-1 flex flex-col p-6 relative flex-1 grow bg-[#f7f9fb] dark:bg-white/5 rounded-2xl overflow-hidden">
        <div className="flex flex-col items-start justify-center relative self-stretch w-full flex-[0_0_auto] rounded-lg">
          <div className="relative self-stretch mt-[-1.00px] font-14-semibold font-[number:var(--14-semibold-font-weight)] text-[#1c1c1c] dark:text-[#e5e7eb] text-[length:var(--14-semibold-font-size)] tracking-[var(--14-semibold-letter-spacing)] leading-[var(--14-semibold-line-height)] [font-style:var(--14-semibold-font-style)]">
            Top Selling Products
          </div>
        </div>

        <div className="flex h-[264px] items-start relative self-stretch w-full text-[#1c1c1c] dark:text-[#e5e7eb]">
          <div className="flex flex-col min-w-56 items-start relative flex-1 grow">
            <div className="flex flex-col h-10 items-start justify-center gap-1 pl-0 pr-3 py-2 relative self-stretch w-full border-b [border-bottom-style:solid] border-[#1c1c1c33] dark:border-white/10">
              <div className="relative self-stretch font-12-regular font-[number:var(--12-regular-font-weight)] text-[#1c1c1c66] dark:text-[#9ca3af] text-[length:var(--12-regular-font-size)] tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] [font-style:var(--12-regular-font-style)]">
                Name
              </div>
            </div>

            <div className="flex flex-col min-h-10 items-start justify-center pl-0 pr-3 py-2 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative self-stretch font-12-regular font-[number:var(--12-regular-font-weight)] text-[#1c1c1c] dark:text-[#e5e7eb] text-[length:var(--12-regular-font-size)] tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] [font-style:var(--12-regular-font-style)]">
                ASOS Ridley High Waist
              </div>
            </div>

            <div className="flex flex-col min-h-10 items-start justify-center pl-0 pr-3 py-2 relative self-stretch w-full flex-[0_0_auto] rounded-lg">
              <div className="relative self-stretch font-12-regular font-[number:var(--12-regular-font-weight)] text-[#1c1c1c] dark:text-[#e5e7eb] text-[length:var(--12-regular-font-size)] tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] [font-style:var(--12-regular-font-style)]">
                Marco Lightweight Shirt
              </div>
            </div>

            <div className="flex flex-col min-h-10 items-start justify-center pl-0 pr-3 py-2 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative self-stretch font-12-regular font-[number:var(--12-regular-font-weight)] text-[#1c1c1c] dark:text-[#e5e7eb] text-[length:var(--12-regular-font-size)] tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] [font-style:var(--12-regular-font-style)]">
                Half Sleeve&nbsp;&nbsp;Shirt
              </div>
            </div>

            <div className="flex flex-col min-h-10 items-start justify-center pl-0 pr-3 py-2 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative self-stretch font-12-regular font-[number:var(--12-regular-font-weight)] text-[#1c1c1c] dark:text-[#e5e7eb] text-[length:var(--12-regular-font-size)] tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] [font-style:var(--12-regular-font-style)]">
                Lightweight Jacket
              </div>
            </div>

            <div className="flex flex-col min-h-10 items-start justify-center pl-0 pr-3 py-2 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative self-stretch font-12-regular font-[number:var(--12-regular-font-weight)] text-[#1c1c1c] dark:text-[#e5e7eb] text-[length:var(--12-regular-font-size)] tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] [font-style:var(--12-regular-font-style)]">
                Marco Shoes
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start relative flex-1 grow">
            <div className="flex flex-col h-10 items-start justify-center gap-1 px-3 py-2 relative self-stretch w-full border-b [border-bottom-style:solid] border-[#1c1c1c33] dark:border-white/10">
              <div className="relative self-stretch font-12-regular font-[number:var(--12-regular-font-weight)] text-[#1c1c1c66] dark:text-[#9ca3af] text-[length:var(--12-regular-font-size)] tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] [font-style:var(--12-regular-font-style)]">
                Price
              </div>
            </div>

            <div className="flex flex-col min-h-10 items-start justify-center px-3 py-2 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative self-stretch font-12-regular font-[number:var(--12-regular-font-weight)] text-[#1c1c1c] dark:text-[#e5e7eb] text-[length:var(--12-regular-font-size)] tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] [font-style:var(--12-regular-font-style)]">
                $79.49
              </div>
            </div>

            <div className="flex flex-col min-h-10 items-start justify-center px-3 py-2 relative self-stretch w-full flex-[0_0_auto] rounded-lg">
              <div className="relative self-stretch font-12-regular font-[number:var(--12-regular-font-weight)] text-[#1c1c1c] dark:text-[#e5e7eb] text-[length:var(--12-regular-font-size)] tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] [font-style:var(--12-regular-font-style)]">
                $128.50
              </div>
            </div>

            <div className="flex flex-col min-h-10 items-start justify-center px-3 py-2 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative self-stretch font-12-regular font-[number:var(--12-regular-font-weight)] text-[#1c1c1c] dark:text-[#e5e7eb] text-[length:var(--12-regular-font-size)] tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] [font-style:var(--12-regular-font-style)]">
                $39.99
              </div>
            </div>

            <div className="flex flex-col min-h-10 items-start justify-center px-3 py-2 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative self-stretch font-12-regular font-[number:var(--12-regular-font-weight)] text-[#1c1c1c] dark:text-[#e5e7eb] text-[length:var(--12-regular-font-size)] tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] [font-style:var(--12-regular-font-style)]">
                $20.00
              </div>
            </div>

            <div className="flex flex-col min-h-10 items-start justify-center px-3 py-2 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative self-stretch font-12-regular font-[number:var(--12-regular-font-weight)] text-[#1c1c1c] dark:text-[#e5e7eb] text-[length:var(--12-regular-font-size)] tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] [font-style:var(--12-regular-font-style)]">
                $79.49
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start relative flex-1 grow">
            <div className="flex flex-col h-10 items-start justify-center gap-1 px-3 py-2 relative self-stretch w-full border-b [border-bottom-style:solid] border-[#1c1c1c33] dark:border-white/10">
              <div className="relative self-stretch font-12-regular font-[number:var(--12-regular-font-weight)] text-[#1c1c1c66] dark:text-[#9ca3af] text-[length:var(--12-regular-font-size)] tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] [font-style:var(--12-regular-font-style)]">
                Quantity
              </div>
            </div>

            <div className="flex flex-col min-h-10 items-start justify-center px-3 py-2 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative self-stretch font-12-regular font-[number:var(--12-regular-font-weight)] text-[#1c1c1c] dark:text-[#e5e7eb] text-[length:var(--12-regular-font-size)] tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] [font-style:var(--12-regular-font-style)]">
                82
              </div>
            </div>

            <div className="flex flex-col min-h-10 items-start justify-center px-3 py-2 relative self-stretch w-full flex-[0_0_auto] rounded-lg">
              <div className="relative self-stretch font-12-regular font-[number:var(--12-regular-font-weight)] text-[#1c1c1c] dark:text-[#e5e7eb] text-[length:var(--12-regular-font-size)] tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] [font-style:var(--12-regular-font-style)]">
                37
              </div>
            </div>

            <div className="flex flex-col min-h-10 items-start justify-center px-3 py-2 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative self-stretch font-12-regular font-[number:var(--12-regular-font-weight)] text-[#1c1c1c] dark:text-[#e5e7eb] text-[length:var(--12-regular-font-size)] tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] [font-style:var(--12-regular-font-style)]">
                64
              </div>
            </div>

            <div className="flex flex-col min-h-10 items-start justify-center px-3 py-2 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative self-stretch font-12-regular font-[number:var(--12-regular-font-weight)] text-[#1c1c1c] dark:text-[#e5e7eb] text-[length:var(--12-regular-font-size)] tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] [font-style:var(--12-regular-font-style)]">
                184
              </div>
            </div>

            <div className="flex flex-col min-h-10 items-start justify-center px-3 py-2 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative self-stretch font-12-regular font-[number:var(--12-regular-font-weight)] text-[#1c1c1c] dark:text-[#e5e7eb] text-[length:var(--12-regular-font-size)] tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] [font-style:var(--12-regular-font-style)]">
                64
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start relative flex-1 grow">
            <div className="flex flex-col h-10 items-start justify-center gap-1 px-3 py-2 relative self-stretch w-full border-b [border-bottom-style:solid] border-[#1c1c1c33] dark:border-white/10">
              <div className="relative self-stretch font-12-regular font-[number:var(--12-regular-font-weight)] text-[#1c1c1c66] dark:text-[#9ca3af] text-[length:var(--12-regular-font-size)] tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] [font-style:var(--12-regular-font-style)]">
                Amount
              </div>
            </div>

            <div className="flex flex-col min-h-10 items-start justify-center px-3 py-2 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative self-stretch font-12-regular font-[number:var(--12-regular-font-weight)] text-[#1c1c1c] dark:text-[#e5e7eb] text-[length:var(--12-regular-font-size)] tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] [font-style:var(--12-regular-font-style)]">
                $6,518.18
              </div>
            </div>

            <div className="flex flex-col min-h-10 items-start justify-center px-3 py-2 relative self-stretch w-full flex-[0_0_auto] rounded-lg">
              <div className="relative self-stretch font-12-regular font-[number:var(--12-regular-font-weight)] text-[#1c1c1c] dark:text-[#e5e7eb] text-[length:var(--12-regular-font-size)] tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] [font-style:var(--12-regular-font-style)]">
                $4,754.50
              </div>
            </div>

            <div className="flex flex-col min-h-10 items-start justify-center px-3 py-2 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative self-stretch font-12-regular font-[number:var(--12-regular-font-weight)] text-[#1c1c1c] dark:text-[#e5e7eb] text-[length:var(--12-regular-font-size)] tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] [font-style:var(--12-regular-font-style)]">
                $2,559.36
              </div>
            </div>

            <div className="flex flex-col min-h-10 items-start justify-center px-3 py-2 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative self-stretch font-12-regular font-[number:var(--12-regular-font-weight)] text-[#1c1c1c] dark:text-[#e5e7eb] text-[length:var(--12-regular-font-size)] tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] [font-style:var(--12-regular-font-style)]">
                $3,680.00
              </div>
            </div>

            <div className="flex flex-col min-h-10 items-start justify-center px-3 py-2 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative self-stretch font-12-regular font-[number:var(--12-regular-font-weight)] text-[#1c1c1c] dark:text-[#e5e7eb] text-[length:var(--12-regular-font-size)] tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] [font-style:var(--12-regular-font-style)]">
                $1,965.81
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="min-w-[200px] max-w-[272px] items-center gap-4 flex flex-col p-6 relative flex-1 grow bg-[#f7f9fb] dark:bg-white/5 rounded-2xl overflow-hidden">
        <div className="relative self-stretch mt-[-1.00px] font-14-semibold font-[number:var(--14-semibold-font-weight)] text-[#1c1c1c] dark:text-[#e5e7eb] text-[length:var(--14-semibold-font-size)] tracking-[var(--14-semibold-letter-spacing)] leading-[var(--14-semibold-line-height)] [font-style:var(--14-semibold-font-style)]">
          Total Sales
        </div>

        <img
          className="relative w-[120px] h-[120px] dark:hidden"
          alt="Element"
          src="/01.svg"
        />
        <img
          className="relative w-[120px] h-[120px] hidden dark:block"
          alt="Element"
          src="/02.svg"
        />

        <div className="gap-3 self-stretch w-full flex-[0_0_auto] flex flex-col items-start relative rounded-2xl">
          <div className="flex-wrap items-center gap-[48px_48px] flex-[0_0_auto] flex relative self-stretch w-full rounded-lg">
            <div className="flex items-center pl-1 pr-2 py-0.5 relative flex-1 grow rounded-lg">
              <img className="relative w-4 h-4" alt="Dot" src="/dot.svg" />
              <div className="relative flex-1 font-12-regular font-[number:var(--12-regular-font-weight)] text-[#1c1c1c] dark:text-[#e5e7eb] text-[length:var(--12-regular-font-size)] tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] [font-style:var(--12-regular-font-style)]">
                Direct
              </div>
            </div>
            <div className="flex flex-col items-start justify-center relative flex-1 grow rounded-lg">
              <div className="relative w-fit font-12-regular font-[number:var(--12-regular-font-weight)] text-[#1c1c1c] dark:text-[#e5e7eb] text-[length:var(--12-regular-font-size)] tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] whitespace-nowrap [font-style:var(--12-regular-font-style)]">
                $300.56
              </div>
            </div>
          </div>

          <div className="flex-wrap items-center gap-[48px_48px] flex-[0_0_auto] flex relative self-stretch w-full rounded-lg">
            <div className="flex items-center pl-1 pr-2 py-0.5 relative flex-1 grow rounded-lg">
              <img className="relative w-4 h-4" alt="Dot" src="/dot.svg" />
              <div className="relative flex-1 font-12-regular font-[number:var(--12-regular-font-weight)] text-[#1c1c1c] dark:text-[#e5e7eb] text-[length:var(--12-regular-font-size)] tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] [font-style:var(--12-regular-font-style)]">
                Affiliate
              </div>
            </div>
            <div className="flex flex-col items-start justify-center relative flex-1 grow rounded-lg">
              <div className="relative w-fit font-12-regular font-[number:var(--12-regular-font-weight)] text-[#1c1c1c] dark:text-[#e5e7eb] text-[length:var(--12-regular-font-size)] tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] whitespace-nowrap [font-style:var(--12-regular-font-style)]">
                $135.18
              </div>
            </div>
          </div>

          <div className="flex-wrap items-center gap-[48px_48px] flex-[0_0_auto] flex relative self-stretch w-full rounded-lg">
            <div className="flex items-center pl-1 pr-2 py-0.5 relative flex-1 grow rounded-lg">
              <img className="relative w-4 h-4" alt="Dot" src="/dot.svg" />
              <div className="relative flex-1 font-12-regular font-[number:var(--12-regular-font-weight)] text-[#1c1c1c] dark:text-[#e5e7eb] text-[length:var(--12-regular-font-size)] tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] [font-style:var(--12-regular-font-style)]">
                Sponsored
              </div>
            </div>
            <div className="flex flex-col items-start justify-center relative flex-1 grow rounded-lg">
              <div className="relative w-fit font-12-regular font-[number:var(--12-regular-font-weight)] text-[#1c1c1c] dark:text-[#e5e7eb] text-[length:var(--12-regular-font-size)] tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] whitespace-nowrap [font-style:var(--12-regular-font-style)]">
                $154.02
              </div>
            </div>
          </div>

          <div className="flex-wrap items-center gap-[48px_48px] flex-[0_0_auto] flex relative self-stretch w-full rounded-lg">
            <div className="flex items-center pl-1 pr-2 py-0.5 relative flex-1 grow rounded-lg">
              <img className="relative w-4 h-4" alt="Dot" src="/dot.svg" />
              <div className="relative flex-1 font-12-regular font-[number:var(--12-regular-font-weight)] text-[#1c1c1c] dark:text-[#e5e7eb] text-[length:var(--12-regular-font-size)] tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] [font-style:var(--12-regular-font-style)]">
                E-mail
              </div>
            </div>
            <div className="flex flex-col items-start justify-center relative flex-1 grow rounded-lg">
              <div className="relative w-fit font-12-regular font-[number:var(--12-regular-font-weight)] text-[#1c1c1c] dark:text-[#e5e7eb] text-[length:var(--12-regular-font-size)] tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] whitespace-nowrap [font-style:var(--12-regular-font-style)]">
                $48.96
              </div>
            </div>
          </div>
        </div>

        <div className="inline-flex items-center gap-1 px-2 py-1 absolute top-[142px] left-10 bg-black/80 dark:bg-white/20 rounded-lg backdrop-blur-[20px] shadow-BG-blur-40">
          <div className="inline-flex flex-col items-start justify-center relative flex-[0_0_auto] rounded-lg">
            <div className="relative self-stretch mt-[-1.00px] font-12-regular text-white dark:text-[#1c1c1c]">
              38.6%
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
