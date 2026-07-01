class Solution {
    public int[][] kClosest(int[][] points, int k) {
        int res [][] = new int[k][2];
        int n = points.length;
        int dist [] = new int[n];
        for(int i=0;i<n;i++){
            dist[i] = points[i][0]*points[i][0] + points[i][1]*points[i][1];
        }
        for(int i=0;i<k;i++){
            int min = Integer.MAX_VALUE;
            int index = -1;
            for(int j=0;j<n;j++){
                if(dist[j]<min){
                    min = dist[j];
                    index = j;
                }
            }
            res[i][0] = points[index][0];
            res[i][1] = points[index][1];
            dist[index] = Integer.MAX_VALUE;
        }
        return res;
    }
}