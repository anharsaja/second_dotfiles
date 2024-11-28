-- bootstrap lazy.nvim, LazyVim and your plugins
require("config.lazy")

vim.o.syntax = "on"

vim.o.termguicolors = true

require("lazy").setup({
  {
    "lukas-reineke/indent-blankline.nvim",
    config = function()
      require("indent_blankline").setup {
        char = "│",  -- Karakter garis untuk indentasi
        show_trailing_blankline_indent = false,  -- Tidak menampilkan indentasi pada baris kosong
        show_current_context = true,  -- Menampilkan highlight konteks saat ini
        show_current_context_start = true,  -- Menampilkan garis konteks di awal
        space_char_blankline = " ",  -- Gunakan spasi sebagai karakter indentasi kosong
      }
    end
  }
})
