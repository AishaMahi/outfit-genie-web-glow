
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/lib/supabase';
import { Upload, Grid2x2, Heart, Filter, Search } from "lucide-react";
import { toast } from '@/components/ui/sonner';

interface ClothingItem {
  id: string;
  name: string;
  category: string;
  image_url: string;
  created_at: string;
  is_favorite: boolean;
}

const MyWardrobe = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('all');
  const [clothingItems, setClothingItems] = useState<ClothingItem[]>([]);
  const [favorites, setFavorites] = useState<ClothingItem[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Fetch clothing items on mount
  useEffect(() => {
    if (user) {
      fetchClothingItems();
    }
  }, [user]);

  const fetchClothingItems = async () => {
    try {
      const { data, error } = await supabase
        .from('clothing_items')
        .select('*')
        .eq('user_id', user?.id);

      if (error) {
        toast.error('Failed to load wardrobe items');
        console.error('Error fetching clothing items:', error.message);
        return;
      }

      setClothingItems(data || []);
      setFavorites(data?.filter(item => item.is_favorite) || []);
    } catch (error) {
      console.error('Error in fetchClothingItems:', error);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files[0]) return;
    
    try {
      setIsUploading(true);
      const file = e.target.files[0];
      
      // Upload image to storage
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${user?.id}/${fileName}`;
      
      const { error: uploadError, data } = await supabase.storage
        .from('clothing_images')
        .upload(filePath, file);
      
      if (uploadError) {
        toast.error('Error uploading image');
        console.error('Error uploading:', uploadError.message);
        return;
      }
      
      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('clothing_images')
        .getPublicUrl(filePath);
      
      // Save clothing item to database
      const { error: insertError } = await supabase
        .from('clothing_items')
        .insert({
          user_id: user?.id,
          name: 'New Item',
          category: 'uncategorized',
          image_url: publicUrl,
          is_favorite: false
        });
      
      if (insertError) {
        toast.error('Error saving item');
        console.error('Error saving item:', insertError.message);
        return;
      }
      
      toast.success('Item uploaded successfully');
      fetchClothingItems();
    } catch (error) {
      console.error('Error in handleFileUpload:', error);
      toast.error('An unexpected error occurred');
    } finally {
      setIsUploading(false);
    }
  };

  const toggleFavorite = async (itemId: string, currentStatus: boolean) => {
    try {
      const { error } = await supabase
        .from('clothing_items')
        .update({ is_favorite: !currentStatus })
        .eq('id', itemId);
      
      if (error) {
        toast.error('Failed to update favorite status');
        return;
      }
      
      fetchClothingItems();
    } catch (error) {
      console.error('Error toggling favorite:', error);
    }
  };

  const filteredItems = clothingItems.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">My Wardrobe</h1>
      
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
        <div className="flex items-center gap-2 w-full md:w-auto">
          <div className="relative w-full md:max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search items..." 
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="flex justify-end">
          <div className="relative">
            <input
              type="file"
              id="file-upload"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              onChange={handleFileUpload}
              accept="image/*"
              disabled={isUploading}
            />
            <Button className="w-full md:w-auto" disabled={isUploading}>
              <Upload className="mr-2 h-4 w-4" />
              {isUploading ? 'Uploading...' : 'Upload Item'}
            </Button>
          </div>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="mb-8">
          <TabsTrigger value="all">All Items</TabsTrigger>
          <TabsTrigger value="favorites">Wishlist</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="space-y-4">
          {filteredItems.length === 0 ? (
            <Card>
              <CardContent className="pt-6 text-center">
                <p>No items found. Upload some clothes to get started!</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredItems.map(item => (
                <Card key={item.id} className="overflow-hidden">
                  <div className="relative aspect-square">
                    <img 
                      src={item.image_url} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="absolute top-2 right-2 bg-background/80 rounded-full"
                      onClick={() => toggleFavorite(item.id, item.is_favorite)}
                    >
                      <Heart 
                        className={`h-4 w-4 ${item.is_favorite ? 'fill-red-500 text-red-500' : ''}`} 
                      />
                    </Button>
                  </div>
                  <CardContent className="p-3">
                    <p className="font-medium truncate">{item.name}</p>
                    <p className="text-sm text-muted-foreground capitalize">{item.category}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="favorites">
          {favorites.length === 0 ? (
            <Card>
              <CardContent className="pt-6 text-center">
                <p>No favorite items yet. Click the heart icon on items to add them to your wishlist!</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {favorites.map(item => (
                <Card key={item.id} className="overflow-hidden">
                  <div className="relative aspect-square">
                    <img 
                      src={item.image_url} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="absolute top-2 right-2 bg-background/80 rounded-full"
                      onClick={() => toggleFavorite(item.id, item.is_favorite)}
                    >
                      <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                    </Button>
                  </div>
                  <CardContent className="p-3">
                    <p className="font-medium truncate">{item.name}</p>
                    <p className="text-sm text-muted-foreground capitalize">{item.category}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MyWardrobe;
