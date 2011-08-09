require "spec_helper"

describe ChrSetsController do
  describe "routing" do

    it "routes to #index" do
      get("/chr_sets").should route_to("chr_sets#index")
    end

    it "routes to #new" do
      get("/chr_sets/new").should route_to("chr_sets#new")
    end

    it "routes to #show" do
      get("/chr_sets/1").should route_to("chr_sets#show", :id => "1")
    end

    it "routes to #edit" do
      get("/chr_sets/1/edit").should route_to("chr_sets#edit", :id => "1")
    end

    it "routes to #create" do
      post("/chr_sets").should route_to("chr_sets#create")
    end

    it "routes to #update" do
      put("/chr_sets/1").should route_to("chr_sets#update", :id => "1")
    end

    it "routes to #destroy" do
      delete("/chr_sets/1").should route_to("chr_sets#destroy", :id => "1")
    end

  end
end
