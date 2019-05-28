class Api::V1::TestTakersController < Api::V1::ApiApplicationController
  require 'json'
  require 'csv'

  def list
    response = []
    if params[:format] == 'csv'
      csv_data = CSV.read(Rails.root.join('lib/sample_data/test_takers.csv'), headers: true)
      csv_data.map do |row|
        response << {"username": row["username"], "email": row["email"]}
      end
    else
      json_data = File.read(Rails.root.join('lib/sample_data/test_takers.json'))
      json_data_hash = JSON.parse(json_data)
      response = json_data_hash["test_takers"]
   end
    render json: response
  end
end