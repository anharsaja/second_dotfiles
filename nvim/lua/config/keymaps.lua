-- Keymaps are automatically loaded on the VeryLazy event
-- Default keymaps that are always set: https://github.com/LazyVim/LazyVim/blob/main/lua/lazyvim/config/keymaps.lua
-- Add any additional keymaps here

-- Ctrl + Shift + Arrow Down (Copy Line Down)
vim.keymap.set("n", "<C-S-Down>", ":t.<CR>", { desc = "Copy line down" })

-- Ctrl + Shift + Arrow Up (Copy Line Up)
vim.keymap.set("n", "<C-S-Up>", ":t-1<CR>", { desc = "Copy line up" })

-- Alt + Arrow Down (Move Line Down)
vim.keymap.set("n", "<A-Down>", ":m .+1<CR>==", { desc = "Move line down" })

-- Alt + Arrow Up (Move Line Up)
vim.keymap.set("n", "<A-Up>", ":m .-2<CR>==", { desc = "Move line up" })

-- Memperbaiki indentasi setelah baris dipindah
vim.keymap.set("v", "<A-Down>", ":m '>+1<CR>gv=gv", { desc = "Move selected lines down" })
vim.keymap.set("v", "<A-Up>", ":m '<-2<CR>gv=gv", { desc = "Move selected lines up" })

-- Ctrl + W untuk memblok satu kata
vim.keymap.set("n", "<C-w>", "viw", { desc = "Select inner word" })

-- Open terminal in a split window at the bottom
vim.keymap.set("n", "<C-t>", ":split | terminal<CR>", { desc = "Open terminal in split" })
