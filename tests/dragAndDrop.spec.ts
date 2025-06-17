import { test as it} from '@playwright/test';
import { DragAndDrop } from '../page_object/dragAndDrop';

it.describe('Drag and Drop', () => {
    it('drag and drop elements', async ({ page }) => {
        const dragAndDrop = new DragAndDrop(page);

        const url = 'https://www.lambdatest.com/selenium-playground/drag-and-drop-demo'
        await page.goto(url)

        // Perform drag and drop
        await dragAndDrop.dragAndDropElement('Draggable 1')
        await dragAndDrop.dragAndDropElement('Draggable 2')

        //Perform drag and drop using option 2
        await page.reload()
        await dragAndDrop.dragAndDropElementOption2('Draggable 1')
        await dragAndDrop.dragAndDropElementOption2('Draggable 2')
    })
})