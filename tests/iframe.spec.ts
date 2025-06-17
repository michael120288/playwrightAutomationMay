import { test as it, expect, FrameLocator } from "@playwright/test";

it.describe("Iframe", () => {
  it("iframe test", async ({ page }) => {
    const url = "https://www.lambdatest.com/selenium-playground/nested-frames/";
    await page.goto(url);

    const frameBottom: FrameLocator = page.frameLocator("[name='frame-bottom']");

    const leftFrame: string | null = await frameBottom
    .frameLocator("[name='frame-left']")
    .locator("body")
    .textContent().then(text => text?.trim() || null);

    const middleFrameText: string | null = await frameBottom.frameLocator("[name='frame-middle']").locator("body").textContent();

    const rightFrameText: string | null = await frameBottom.frameLocator("[name='frame-right']").locator("body").textContent();

    //Assert the text content of the frames
    expect(leftFrame).toBe("Left")
    expect(middleFrameText).toContain("Middle");
    expect(rightFrameText).toContain("Right");
  });
});
