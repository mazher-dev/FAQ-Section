import React from "react";

const FAQ2 = () => {
  return (
    <div class="dark:bg-gray-800 mt-10">
      <div class="w-full max-w-3xl px-2 mx-auto py-10 dark:bg-transparent dark:text-gray-200">
        <h3 class="mt-3 text-xl font-bold text-gray-800 md:text-2xl dark:text-gray-100">
          Frequently Asked Questions
        </h3>
        <div class="grid max-w-5xl mx-auto mt-6 divide-y divide-gray-200 dark:divide-gray-700">
          <details class="group py-4">
            <summary class="flex items-center justify-between font-medium list-none cursor-pointer">
              <span>Is TechSupportPro free to use?</span>
              <span class="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shape-rendering="geometricPrecision"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                  class="dark:stroke-gray-400"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p class="mt-3 text-gray-600 group-open:animate-fadeIn dark:text-gray-300">
              Yes! You can access our basic support services for free. However,
              we also offer premium plans with additional features.
            </p>
          </details>

          <details class="group py-4">
            <summary class="flex items-center justify-between font-medium list-none cursor-pointer">
              <span>Does TechSupportPro have a community forum?</span>
              <span class="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shape-rendering="geometricPrecision"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                  class="dark:stroke-gray-400"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p class="mt-3 text-gray-600 group-open:animate-fadeIn dark:text-gray-300">
              Absolutely! Our community forum allows users to ask questions,
              share solutions, and collaborate on various tech issues.
              <a href="/forum">TechSupportPro - Forum</a>
            </p>
          </details>

          <details class="group py-4">
            <summary class="flex items-center justify-between font-medium list-none cursor-pointer">
              <span>
                What kind of support services does TechSupportPro provide?
              </span>
              <span class="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shape-rendering="geometricPrecision"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                  class="dark:stroke-gray-400"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p class="mt-3 text-gray-600 group-open:animate-fadeIn dark:text-gray-300">
              We offer a wide range of services, including tech troubleshooting,
              software installations, network setup assistance, and device
              optimization. Our support covers both home users and businesses.
            </p>
          </details>

          <details class="group py-4">
            <summary class="flex items-center justify-between font-medium list-none cursor-pointer">
              <span>
                How can I save my support tickets for future reference?
              </span>
              <span class="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shape-rendering="geometricPrecision"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                  class="dark:stroke-gray-400"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p class="mt-3 text-gray-600 group-open:animate-fadeIn dark:text-gray-300">
              After logging into your account, you can view and save your
              support tickets under the "My Tickets" section of your dashboard.
            </p>
          </details>

          <details class="group py-4">
            <summary class="flex items-center justify-between font-medium list-none cursor-pointer">
              <span>
                How do I get in touch with TechSupportPro for urgent assistance?
              </span>
              <span class="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shape-rendering="geometricPrecision"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                  class="dark:stroke-gray-400"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p class="mt-3 text-gray-600 group-open:animate-fadeIn dark:text-gray-300">
              You can reach us through our 24/7 live chat or call our support
              hotline for urgent technical assistance.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default FAQ2;
