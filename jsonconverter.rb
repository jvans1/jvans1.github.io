require 'json'

file = File.read('./results.json')

json = JSON.parse(file)

total = 0
chunk_num = 0
converted_val = json.each_slice(100).map do |chunk|
  chunk.each do |hash|
    total += hash["bbwon"] unless hash["bbwon"].nil?
  end
  chunk_num += 100
  [chunk_num, total / 100]
end

File.write('./converted_results.json', converted_val.to_json)
