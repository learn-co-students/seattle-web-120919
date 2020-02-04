require "pry"

def pascal_one_method(row_num)
  array_of_rows = []
  array_of_rows << [1]
  # start the array with [1] in the first row
  (1..row_num).each do |row|
    previous_row = array_of_rows[row-1]
    new_row_length = previous_row.length + 1
    new_row = []
    # ... => not including the new_row_length
    (0...new_row_length).each do |index_of_row|
      if index_of_row == 0 || index_of_row == new_row_length - 1
        new_row << 1
        # if the index is 0, i.e. the first in a row, ouput a 1. If the index is the farthest right, i.e. the last in a row ouput a 1. Remember arrays are zero-indexed. This places the 1 at the edges.
      else
        new_row << previous_row[index_of_row-1] + previous_row[index_of_row]
        # else add the index at the value above and the value behind it. This is for the indexes that are not the first or last in the row
      end
    end
    array_of_rows << new_row
  end
  # p array_of_rows.last.join(", ")
  p array_of_rows
end


def pascal_two_methods(row_num)
  array_of_rows = []
  array_of_rows << [1]
  # start the array with [1] in the first row
  (1..row_num).each do |row|
    previous_row = array_of_rows[row-1]
    array_of_rows << compute_a_row_helper_method(previous_row)
    new_row_length = previous_row.length + 1
    new_row = []
    (0...new_row_length).each do |index|
      if index == 0 || index == new_row_length - 1
        new_row << 1
        # if the index is 0, ouput a 1. If it is the farthest right, ouput a 1. Remember arrays are zero-indexed. This places the 1 at the edges.
      else
        new_row << previous_row[index-1] + previous_row[index]
        # else add the index at the value above and the value behind it.
      end
     end
  end
  # p array_of_rows.last.join(", ")
  p array_of_rows
end

def compute_a_row_helper_method(previous_row)
 new_row = []
 new_row_length = previous_row.length + 1
 (0...new_row_length).each do |index|
  if index == 0 || index == new_row_length - 1
    new_row << 1
    # if the index is 0, ouput a 1. If it is the farthest right, ouput a 1. Remember arrays are zero-indexed. This places the 1 at the edges.
  else
    new_row << previous_row[index-1] + previous_row[index]
    # else add the index at the value above and the value behind it.
  end
 end
 new_row
end

def test_up_to(num)
  num.times do |number|
    pascal_one_method(number)
  end
end


pascal_one_method(5)
pascal_two_methods(5)
# test_up_to(5)
