class CreateNotes < ActiveRecord::Migration[5.0]
  def change
    create_table :notes do |t|
      t.string :title
      t.text :body
      t.text :tags, array: true, default: []

      t.timestamps
    end
  end
end
